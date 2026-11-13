import { NextRequest, NextResponse } from "next/server";
import { checkCredentials, signSession, adminCookie } from "@/lib/auth";
import { rateLimit } from "@/lib/registrations";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`admin-login:${ip}`, 8, 5 * 60_000)) {
    return NextResponse.json({ message: "Too many attempts. Try again later." }, { status: 429 });
  }
  const { username, password } = await req.json().catch(() => ({}));
  if (!username || !password || !checkCredentials(String(username), String(password))) {
    return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
  }
  const token = signSession(String(username), Date.now());
  const res = NextResponse.json({ ok: true });
  // Secure cookies require HTTPS. Enable explicitly in production deployments
  // served over TLS via ADMIN_COOKIE_SECURE=true.
  const secure = process.env.ADMIN_COOKIE_SECURE === "true";
  res.cookies.set(adminCookie.name, token, {
    httpOnly: true,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge: adminCookie.maxAge,
  });
  return res;
}
