const toEmail = process.env.CONTACT_TO_EMAIL || "kenisaac.d@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Ken Isaac Portfolio <onboarding@resend.dev>";

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

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return res.status(500).json({ message: "Email service is not configured" });
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

  if (!name || !isValidEmail(email) || !subject || message.length < 20) {
    return res.status(400).json({ message: "Invalid contact form submission" });
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
    return res.status(502).json({
      message: "Could not send email",
      detail: errorText
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
