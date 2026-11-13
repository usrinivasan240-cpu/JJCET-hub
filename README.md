# JJCET-STIF — Official Website

Official website for **JJCET Sowdambikaa Technology Incubation Foundation (JJCET-STIF)** —
a Section 8 company and Pre-Incubation Centre sanctioned by StartupTN,
hosted at J.J. College of Engineering and Technology, Tiruchirappalli.

## Quick start

```bash
npm install
cp .env.example .env   # then fill ADMIN_SECRET etc.
npm run dev            # http://localhost:3000
```

## Supplying official images & logos

Drop the supplied files into `/public/images/` with the exact filenames
listed in `public/images/README.md`. All components read images through
`src/config/imageSources.ts` — update only that file if a filename differs.
Missing files render neutral placeholders (no broken images, no recreated logos).

## Registration flow

- Public form: `/register` → `POST /api/register` (server-side validation + rate limiting)
- Storage: `data/registrations.json` (file-based; swap `src/lib/registrations.ts` for Firestore when ready)
- Email: admin notification to `stif@jjcet.ac.in` + applicant confirmation via SMTP when `SMTP_*` env vars are set; otherwise logged to console.
- Each submission gets a unique `JJCET-STIF-YYYY-XXXXXX` reference ID.

## Admin dashboard

- `/admin/login` → `/admin` → `/admin/registrations` → `/admin/registrations/[id]`
- Stats, search, status filter, pagination, CSV export, status changes, private notes, delete.
- Auth: `ADMIN_USERNAME` / `ADMIN_PASSWORD` in env, signed httpOnly cookie session (`ADMIN_SECRET`).

## Content rules

The JJCET-STIF brochure is authoritative. No invented statistics, startups,
funding, mentors, schemes or events — empty states are used until official
data is supplied. See `src/data/content.ts`.

## Build

```bash
npm run build
npm start
```
