import { env } from "@/config/env";

type HttpOptions = RequestInit & {
  timeoutMs?: number;
};

export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
    public payload?: unknown
  ) {
    super(message);
  }
}

export async function httpClient<T>(path: string, options: HttpOptions = {}): Promise<T> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), options.timeoutMs ?? 8_000);

  try {
    const response = await fetch(`${env.VITE_API_BASE_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      ...options,
      signal: controller.signal
    });

    const contentType = response.headers.get("content-type");
    const payload = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new HttpError(response.statusText || "Request failed", response.status, payload);
    }

    return payload as T;
  } finally {
    window.clearTimeout(timeout);
  }
}
