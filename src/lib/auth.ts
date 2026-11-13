import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "jjcet_stif_admin";
const MAX_AGE = 60 * 60 * 8; // 8 hours

function secret(): string {
  return process.env.ADMIN_SECRET || "dev-only-secret-change-me-please-32chars";
}

export function signSession(username: string, issuedAt: number): string {
  const payload = `${username}.${issuedAt}`;
  const sig = createHmac("sha256", secret()).update(payload).digest("hex");
  return Buffer.from(`${payload}.${sig}`).toString("base64url");
}

export function verifySession(token: string | undefined | null): { username: string } | null {
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const [username, issuedAt, sig] = decoded.split(".");
    if (!username || !issuedAt || !sig) return null;
    const expected = createHmac("sha256", secret()).update(`${username}.${issuedAt}`).digest("hex");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    if (Date.now() - Number(issuedAt) > MAX_AGE * 1000) return null;
    return { username };
  } catch {
    return null;
  }
}

export function getAdminFromCookies(): { username: string } | null {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verifySession(token);
}

export const adminCookie = {
  name: COOKIE_NAME,
  maxAge: MAX_AGE,
};

export function checkCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD || "change-me-in-production";
  return username === expectedUser && password === expectedPass;
}
