import { NextRequest, NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/auth";
import { readAll, updateRegistration, deleteRegistration, type RegistrationStatus } from "@/lib/registrations";

const STATUSES: RegistrationStatus[] = ["New", "Under Review", "Contacted", "Shortlisted", "Rejected", "Converted"];

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!getAdminFromCookies()) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const rows = await readAll();
  const row = rows.find((r) => r.registrationId === params.id);
  if (!row) return NextResponse.json({ message: "Not found." }, { status: 404 });
  return NextResponse.json({ registration: row });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!getAdminFromCookies()) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  if (body.status && !STATUSES.includes(body.status)) {
    return NextResponse.json({ message: "Invalid status." }, { status: 422 });
  }
  const updated = await updateRegistration(params.id, { status: body.status, adminNotes: body.adminNotes });
  if (!updated) return NextResponse.json({ message: "Not found." }, { status: 404 });
  return NextResponse.json({ registration: updated });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!getAdminFromCookies()) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const ok = await deleteRegistration(params.id);
  if (!ok) return NextResponse.json({ message: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
