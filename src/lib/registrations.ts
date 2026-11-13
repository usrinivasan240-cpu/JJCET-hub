import fs from "node:fs/promises";
import path from "node:path";

export type RegistrationStatus =
  | "New"
  | "Under Review"
  | "Contacted"
  | "Shortlisted"
  | "Rejected"
  | "Converted";

export interface Registration {
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  applicantType: string;
  department: string;
  year: string;
  field: string;
  startupName: string;
  ideaDescription: string;
  teamSize: string;
  prototypeStatus: string;
  supportInterests: string[];
  linkedin: string;
  github: string;
  message: string;
  consent: boolean;
  createdAt: string;
  status: RegistrationStatus;
  adminNotes: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

async function ensureFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

export async function readAll(): Promise<Registration[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  try {
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

async function writeAll(rows: Registration[]) {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(rows, null, 2), "utf-8");
}

export function makeRegistrationId(): string {
  const year = new Date().getFullYear();
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase().replace(/[^A-Z0-9]/g, "X");
  const time = Date.now().toString(36).slice(-4).toUpperCase();
  return `JJCET-STIF-${year}-${rand}${time}`;
}

export interface ValidationResult {
  ok: boolean;
  errors: Record<string, string>;
  data?: Omit<Registration, "registrationId" | "createdAt" | "status" | "adminNotes">;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s-]{6,15}$/;

export function validatePayload(body: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const b = (body ?? {}) as Record<string, unknown>;
  const str = (k: string) => String(b[k] ?? "").trim();
  const arr = (k: string): string[] => {
    const v = b[k];
    if (Array.isArray(v)) return v.map(String).filter(Boolean).slice(0, 20);
    if (typeof v === "string" && v) return [v];
    return [];
  };

  const fullName = str("fullName");
  const email = str("email").toLowerCase();
  const phone = str("phone").replace(/\s+/g, "");
  const college = str("college");
  const applicantType = str("applicantType");
  const department = str("department");
  const year = str("year");
  const field = str("field");
  const startupName = str("startupName");
  const ideaDescription = str("ideaDescription");
  const teamSize = str("teamSize");
  const prototypeStatus = str("prototypeStatus");
  const supportInterests = arr("supportInterests");
  const linkedin = str("linkedin");
  const github = str("github");
  const message = str("message");
  const consent = b["consent"] === true || b["consent"] === "true" || b["consent"] === "on";

  const APPLICANT_TYPES = ["Student", "Exited", "Registered", "Early-Stage Startup"];
  const CURRENT_STATUSES = ["Idea", "POC", "Validated Prototype", "Revenue Stage"];
  const wordCount = ideaDescription ? ideaDescription.split(/\s+/).filter(Boolean).length : 0;
  const isStudent = applicantType === "Student";

  if (fullName.length < 2 || fullName.length > 120) errors.fullName = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!PHONE_RE.test(phone)) errors.phone = "Please enter a valid mobile number.";
  if (college.length < 2 || college.length > 200) errors.college = "Please enter your college / institution.";
  if (!applicantType) errors.applicantType = "Please select your applicant type.";
  else if (!APPLICANT_TYPES.includes(applicantType)) errors.applicantType = "Invalid applicant type.";
  if (isStudent) {
    if (department.length < 1 || department.length > 120) errors.department = "Please enter your department.";
    if (!year) errors.year = "Please select your year of study.";
  }
  if (!field) errors.field = "Please choose an area / field of interest.";
  // Description target: 100–150 words (hard cap at 150).
  if (wordCount > 150) errors.ideaDescription = "Please keep the description within 150 words (100–150 words is recommended).";
  if (startupName.length > 200) errors.startupName = "Project name is too long.";
  if (teamSize && teamSize.length > 20) errors.teamSize = "Invalid team size.";
  if (prototypeStatus && !CURRENT_STATUSES.includes(prototypeStatus)) errors.prototypeStatus = "Please choose a valid current status.";
  if (linkedin && linkedin.length > 300) errors.linkedin = "LinkedIn URL is too long.";
  if (github && github.length > 300) errors.github = "Link is too long.";
  if (message.length > 3000) errors.message = "Message is too long.";
  if (!consent) errors.consent = "Please accept the consent to proceed.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return {
    ok: true,
    errors: {},
    data: {
      fullName, email, phone, college, applicantType,
      department: isStudent ? department : "",
      year: isStudent ? year : "",
      field, startupName, ideaDescription, teamSize, prototypeStatus,
      supportInterests, linkedin, github, message, consent,
    },
  };
}

export async function saveRegistration(
  data: Omit<Registration, "registrationId" | "createdAt" | "status" | "adminNotes">
): Promise<Registration> {
  const rows = await readAll();
  // Prevent obvious duplicates: same email + same startup/idea within 24h
  const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
  const dup = rows.find(
    (r) =>
      r.email.toLowerCase() === data.email.toLowerCase() &&
      new Date(r.createdAt).getTime() > dayAgo &&
      (r.startupName || "").toLowerCase() === (data.startupName || "").toLowerCase()
  );
  if (dup) return dup;

  const record: Registration = {
    ...data,
    registrationId: makeRegistrationId(),
    createdAt: new Date().toISOString(),
    status: "New",
    adminNotes: "",
  };
  rows.unshift(record);
  await writeAll(rows);
  return record;
}

export async function updateRegistration(
  id: string,
  patch: Partial<Pick<Registration, "status" | "adminNotes">>
): Promise<Registration | null> {
  const rows = await readAll();
  const idx = rows.findIndex((r) => r.registrationId === id);
  if (idx === -1) return null;
  if (patch.status) rows[idx].status = patch.status;
  if (typeof patch.adminNotes === "string") rows[idx].adminNotes = patch.adminNotes.slice(0, 5000);
  await writeAll(rows);
  return rows[idx];
}

export async function deleteRegistration(id: string): Promise<boolean> {
  const rows = await readAll();
  const next = rows.filter((r) => r.registrationId !== id);
  if (next.length === rows.length) return false;
  await writeAll(next);
  return true;
}

// ---- Simple in-memory rate limiting (per IP, per route) ----
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, max = 10, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  entry.count += 1;
  return entry.count <= max;
}
