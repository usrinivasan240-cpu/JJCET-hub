import nodemailer from "nodemailer";
import type { Registration } from "./registrations";

const ADMIN_EMAIL = process.env.ADMIN_NOTIFY_EMAIL || "stif@jjcet.ac.in";

function hasSmtp() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function transporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

export async function notifyAdmin(reg: Registration) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const subject = `New JJCET-STIF Registration – ${reg.fullName}`;
  const text = [
    "New JJCET-STIF interest registration received.",
    "",
    `Registration ID: ${reg.registrationId}`,
    `Name: ${reg.fullName}`,
    `Email: ${reg.email}`,
    `Phone: ${reg.phone}`,
    `College: ${reg.college}`,
    `Department: ${reg.department || "-"}`,
    `Year: ${reg.year || "-"}`,
    `Field: ${reg.field}`,
    `Startup / Project: ${reg.startupName || "-"}`,
    `Current Status: ${reg.prototypeStatus || "-"}`,
    `Submitted: ${reg.createdAt}`,
    siteUrl ? `Admin dashboard: ${siteUrl}/admin` : "Admin dashboard: /admin",
  ].join("\n");

  if (!hasSmtp()) {
    console.log("[email:ADMIN — SMTP not configured, logging instead]\nSubject:", subject, "\n" + text);
    return { delivered: false, reason: "smtp-not-configured" };
  }
  try {
    await transporter().sendMail({
      from: process.env.EMAIL_FROM || "JJCET-STIF <no-reply@jjcet.ac.in>",
      to: ADMIN_EMAIL,
      subject,
      text,
    });
    return { delivered: true };
  } catch (err) {
    console.error("[email:ADMIN failed]", err);
    return { delivered: false, reason: "send-failed" };
  }
}

export async function notifyApplicant(reg: Registration) {
  const subject = "JJCET-STIF – Interest Registration Received";
  const text = [
    `Dear ${reg.fullName},`,
    "",
    "Thank you for registering your interest with JJCET Sowdambikaa Technology Incubation Foundation.",
    "",
    "Your registration ID is:",
    "",
    reg.registrationId,
    "",
    "Our team will review your information and contact you regarding the next steps.",
    "",
    "Regards,",
    "JJCET-STIF",
    "J.J. College of Engineering and Technology",
    "Tiruchirappalli",
  ].join("\n");

  if (!hasSmtp()) {
    console.log(`[email:APPLICANT — SMTP not configured, logging instead] to ${reg.email}\n` + text);
    return { delivered: false, reason: "smtp-not-configured" };
  }
  try {
    await transporter().sendMail({
      from: process.env.EMAIL_FROM || "JJCET-STIF <no-reply@jjcet.ac.in>",
      to: reg.email,
      subject,
      text,
    });
    return { delivered: true };
  } catch (err) {
    console.error("[email:APPLICANT failed]", err);
    return { delivered: false, reason: "send-failed" };
  }
}
