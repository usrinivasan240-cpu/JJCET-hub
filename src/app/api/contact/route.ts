import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/registrations";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`contact:${ip}`, 10, 60_000)) {
    return NextResponse.json({ message: "Too many requests." }, { status: 429 });
  }
  const body = await req.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || subject.length < 2 || message.length < 5) {
    return NextResponse.json({ message: "Please fill all required fields correctly." }, { status: 422 });
  }

  const text = [`New contact message from the JJCET-STIF website.`, ``, `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "-"}`, `Subject: ${subject}`, ``, message].join("\n");

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const t = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await t.sendMail({
        from: process.env.EMAIL_FROM || "JJCET-STIF <no-reply@jjcet.ac.in>",
        to: process.env.ADMIN_NOTIFY_EMAIL || "stif@jjcet.ac.in",
        subject: `Website Contact — ${subject}`,
        text: `${text}\n\nReply-To: ${email}`,
      });
    } catch (err) {
      console.error("[contact email failed]", err);
    }
  } else {
    console.log("[contact — SMTP not configured, logging]\n" + text);
  }

  return NextResponse.json({ ok: true });
}
