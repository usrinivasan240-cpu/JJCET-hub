import { NextRequest, NextResponse } from "next/server";
import { validatePayload, saveRegistration, rateLimit } from "@/lib/registrations";
import { notifyAdmin, notifyApplicant } from "@/lib/email";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`register:${ip}`, 8, 60_000)) {
    return NextResponse.json({ message: "Too many requests. Please try again in a minute." }, { status: 429 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const v = validatePayload(body);
  if (!v.ok || !v.data) {
    return NextResponse.json({ message: "Please fix the highlighted fields.", errors: v.errors }, { status: 422 });
  }

  // Basic honeypot / length guards already in validator
  const record = await saveRegistration(v.data);

  // Fire-and-forget notifications (never block the response on mail failure)
  Promise.allSettled([notifyAdmin(record), notifyApplicant(record)]);

  return NextResponse.json(
    { registrationId: record.registrationId, message: "Thank you for your interest in JJCET-STIF. Our team will review your information and contact you." },
    { status: 201 }
  );
}
