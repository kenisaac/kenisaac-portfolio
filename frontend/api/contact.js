import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

let localEnvLoaded = false;
const genericContactError = "Message could not be sent right now.";

function getEnvValue(key) {
  loadLocalEnvFiles();
  return process.env[key];
}

function loadLocalEnvFiles() {
  if (localEnvLoaded) {
    return;
  }

  localEnvLoaded = true;

  for (const fileName of [".env.local", ".env.development.local", "../.env.local", "../.env"]) {
    const filePath = join(process.cwd(), fileName);

    if (!existsSync(filePath)) {
      continue;
    }

    const lines = readFileSync(filePath, "utf8").split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const match = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(trimmed);

      if (!match || process.env[match[1]]) {
        continue;
      }

      process.env[match[1]] = normalizeEnvValue(match[2]);
    }
  }
}

function normalizeEnvValue(value) {
  const trimmed = value.trim();
  const quote = trimmed[0];

  if ((quote === '"' || quote === "'") && trimmed.endsWith(quote)) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readBody(req) {
  if (req.body && typeof req.body === "object") {
    return Promise.resolve(req.body);
  }

  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const resendApiKey = getEnvValue("RESEND_API_KEY");
  const toEmail = getEnvValue("CONTACT_TO_EMAIL") || "kenisaac.d@gmail.com";
  const fromEmail = getEnvValue("CONTACT_FROM_EMAIL") || "Ken Isaac Portfolio <onboarding@resend.dev>";

  if (!resendApiKey) {
    return res.status(500).json({ message: genericContactError });
  }

  let payload;

  try {
    payload = await readBody(req);
  } catch {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const subject = String(payload.subject || "").trim();
  const message = String(payload.message || "").trim();

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Enter a valid email address" });
  }

  if (!subject) {
    return res.status(400).json({ message: "Subject is required" });
  }

  if (message.length < 20) {
    return res.status(400).json({ message: "Message must be at least 20 characters" });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111;">
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio inquiry: ${subject}`,
      html
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend email send failed", {
      status: response.status,
      body: errorText
    });

    return res.status(502).json({
      message: genericContactError
    });
  }

  const result = await response.json();

  return res.status(200).json({
    id: result.id,
    status: "SENT",
    createdAt: new Date().toISOString()
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
