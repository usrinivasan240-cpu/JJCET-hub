import { NextRequest, NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/auth";
import { readAll } from "@/lib/registrations";

export async function GET(req: NextRequest) {
  if (!getAdminFromCookies()) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const rows = await readAll();
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();
  const status = searchParams.get("status") || "";
  const field = searchParams.get("field") || "";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";

  let out = rows;
  if (q) out = out.filter((r) => [r.fullName, r.email, r.phone, r.college, r.department, r.registrationId, r.startupName].join(" ").toLowerCase().includes(q));
  if (status) out = out.filter((r) => r.status === status);
  if (field) out = out.filter((r) => r.field === field);
  if (from) out = out.filter((r) => r.createdAt >= from);
  if (to) out = out.filter((r) => r.createdAt <= to + "T23:59:59.999Z");

  return NextResponse.json({ registrations: out, total: rows.length });
}
