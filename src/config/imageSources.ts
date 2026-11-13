/**
 * Centralized image source mapping for JJCET-STIF website.
 *
 * IMPORTANT:
 * - All images MUST be referenced through this file. Do not hardcode
 *   "/images/..." strings inside components.
 * - Drop the supplied official files into /public/images/ using the exact
 *   filenames below. If a supplied filename differs, update ONLY this map.
 * - Missing files render a designed institutional placeholder via
 *   <PublicImage /> (server, filesystem-checked) or <SmartImage />
 *   (client, probe-first) — never a broken image, never a recreated logo.
 */

export const imageSources = {
  // ---- Official logos (do not modify / redraw — use supplied files) ----
  jjcetLogo: "/images/jjcet-logo.png",
  jjcetStifLogo: "/images/jjcet-stif-logo.png",

  // ---- "In Association with" partner / regulator logos ----
  startupTNLogo: "/images/startuptn-logo.png",
  msmeLogo: "/images/msme-logo.png",
  nbaLogo: "/images/nba-logo.png",
  naacLogo: "/images/naac-logo.png",
  aicteLogo: "/images/aicte-logo.png",
  ediiLogo: "/images/edii-logo.png",

  // ---- Campus / hero ----
  heroCampus: "/images/jjcet-campus-01.jpg",
  campusGarden: "/images/jjcet-campus-02.jpg",
  campusEntrance: "/images/jjcet-campus-03.jpg",

  // ---- Incubation hub ----
  incubationHub: "/images/incubation-hub.jpg",
  studentsInnovation: "/images/students-working.jpg",

  // ---- Facilities ----
  coworking1: "/images/coworking-space-01.jpg",
  coworking2: "/images/coworking-space-02.jpg",
  makerSpace: "/images/maker-space.jpg",
  droneCentre: "/images/drone-centre.jpg",
  designToProduct: "/images/design-to-product.jpg",

  // ---- Focus sectors ----
  automation: "/images/focus-automation.jpg",
  evEmbedded: "/images/focus-ev.jpg",
  droneTechnology: "/images/focus-drone.jpg",
  deepTech: "/images/focus-deep-tech.jpg",
  iot: "/images/focus-iot.jpg",

  // ---- Event gallery: One-day FDP on Government Schemes & Opportunities for Startups (19.12.2026) ----
  fdpGovtSchemes1: "/images/events/fdp-govt-schemes-01.png",
  fdpGovtSchemes2: "/images/events/fdp-govt-schemes-02.png",
  fdpGovtSchemes3: "/images/events/fdp-govt-schemes-03.png",
  fdpGovtSchemes4: "/images/events/fdp-govt-schemes-04.png",
} as const;

export type ImageKey = keyof typeof imageSources;
