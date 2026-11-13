import { imageSources } from "@/config/imageSources";

/**
 * Authoritative site content.
 * Wording below comes from the official JJCET-STIF brochure.
 * Do NOT invent statistics, startups, mentors, schemes or achievements.
 */

export const siteMeta = {
  name: "JJCET-STIF | JJCET Sowdambikaa Technology Incubation Foundation",
  shortName: "JJCET-STIF",
  description:
    "JJCET Sowdambikaa Technology Incubation Foundation is a Section 8 company and Pre-Incubation Centre sanctioned by StartupTN, supporting innovative ideas, early-stage entrepreneurs and scalable ventures.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stif.jjcet.ac.in",
  email: "stif@jjcet.ac.in",
  phones: ["979066007", "9442882091"],
  address: {
    line1: "J.J. College of Engineering and Technology,",
    line2: "Ammapettai, Poolangulathupatti (PO),",
    line3: "Tiruchirappalli, Tamil Nadu – 620 009",
  },
};

/** Second approved paragraph from the official website data collection form (Dr. Navin M, 07/10/2026). */
export const aboutApprovedExtra = [
  "The JJCET STIF aims to breakthrough using specific interventions in technology and in this way enhances living conditions of people worldwide. This framework will provide an institutional support to students to convert intellectual property into high-impact enterprises. Moreover, the policy focuses on the development of sustainable jobs due to innovation-led growth.",
  "JJCET is determined to facilitate the infrastructure, mentorship and networking services needed by startups to succeed in a competitive environment. We grow our network of incubates by making it easy to commercially exploit them so that they can be agile to complex problems. After all, this policy strengthens the position as one of the pillars of economic and social change by JJCET excellence in engineering and entrepreneurship."
];

/** Extra official facilities with official jjcet.ac.in pages (form §8). */
export const linkedFacilities = [
  { title: "Industrial Automation & Robotics (KUKA – JJ Centre)", href: "https://jjcet.ac.in/kuka-jj-industrial-robotics-centre/" },
  { title: "Intel – AI Skill Centre", href: "https://jjcet.ac.in/ai-skill-centre-intel/" },
  { title: "CDAC JJ IOT Lab Centre", href: "https://jjcet.ac.in/cdac-jj-iot-lab-centre/" }
];

export const aboutOfficialText =
  "JJCET SOWDAMBIKAA TECHNOLOGY INCUBATION FOUNDATION (JJCET-STIF) is a Section 8 company and Pre-Incubation Centre sanctioned by StartupTN. We empower early-stage entrepreneurs by transforming innovative ideas into scalable, market-ready ventures through structured support, world-class infrastructure, and expert mentorship.";

export const heroContent = {
  eyebrow: "JJCET-STIF",
  titleA: "LAUNCH YOUR",
  titleAccent: "STARTUP",
  titleB: "WITH US",
  sub: "A Pre-Incubation Centre sanctioned by StartupTN",
  text: "Transforming innovative ideas into scalable, market-ready ventures through structured support, world-class infrastructure, and expert mentorship.",
  sideWords: ["INNOVATE", "INCUBATE", "GROW", "MAKE AN IMPACT"] as const,
};

export const highlightCards = [
  { key: "innovators", title: "Student Innovators", desc: "Ideas nurtured from classroom to venture", icon: "users" },
  { key: "ideas", title: "Idea Development", desc: "Structured pre-incubation journey", icon: "bulb" },
  { key: "coe", title: "Centres of Excellence", desc: "Maker Space · Drone · Design to Product", icon: "layers" },
  { key: "mentors", title: "Mentorship & Expertise", desc: "Guidance from faculty & industry", icon: "compass" },
  { key: "programs", title: "Innovation Programs", desc: "Workshops, hackathons & bootcamps", icon: "rocket" }
] as const;

export const valueProps = [
  { title: "Structured mentorship programs", desc: "Guided mentoring across idea validation, prototyping and go-to-market.", icon: "mentor" },
  { title: "Prototype development support", desc: "Hands-on help to convert concepts into testable, working prototypes.", icon: "prototype" },
  { title: "Access to Infrastructure", desc: "Labs, maker equipment, coworking and research centres on campus.", icon: "infra" },
  { title: "Networking opportunities", desc: "Connect with peers, faculty experts, industry and the StartupTN ecosystem.", icon: "network" },
  { title: "Coworking & collaboration spaces", desc: "Dedicated desks and team spaces designed for building together.", icon: "cowork" },
  { title: "Investor readiness coaching", desc: "Pitch preparation and readiness support for the next stage of growth.", icon: "investor" }
] as const;

export const focusSectors = [
  {
    slug: "industrial-automation-robotics",
    title: "Industrial Automation & Robotics",
    shortTitle: ["Industrial Automation", "& Robotics"],
    image: imageSources.automation,
    alt: "Industrial automation and robotics laboratory",
  },
  {
    slug: "ev-embedded-systems",
    title: "Electric Vehicles & Embedded System",
    shortTitle: ["Electric Vehicles &", "Embedded Systems"],
    image: imageSources.evEmbedded,
    alt: "Electric vehicle and embedded systems workbench",
  },
  {
    slug: "ai-drone-technology",
    title: "AI-Driven Drone Technology",
    shortTitle: ["AI-Driven Drone", "Technology"],
    image: imageSources.droneTechnology,
    alt: "AI-driven drone in flight",
  },
  {
    slug: "iot-electronics",
    title: "IoT & Electronics",
    shortTitle: ["IoT &", "Electronics"],
    image: imageSources.iot,
    alt: "Internet of Things and electronics prototyping",
  },
  {
    slug: "deep-tech-emerging",
    title: "Deep Tech & Emerging Technologies",
    shortTitle: ["Deep Tech &", "Emerging Technologies"],
    image: imageSources.deepTech,
    alt: "Deep tech and emerging technologies research",
  }
] as const;

export const centresOfExcellence = [
  {
    title: "Maker Space",
    desc: "Laser Cutting & Advanced 3D Printing",
    image: imageSources.makerSpace,
    alt: "Maker Space with laser cutting and 3D printing",
    icon: "maker",
  },
  {
    title: "AI Drone Research Centre",
    desc: "Details will be announced soon.",
    image: imageSources.droneCentre,
    alt: "AI Drone Research Centre",
    icon: "drone",
  },
  {
    title: "Design to Product Centre",
    desc: "3D Printers & EV Kits — from design files to working products.",
    image: imageSources.designToProduct,
    alt: "Design to Product Centre with 3D printers and EV kits",
    icon: "design",
  }
] as const;

/** Official public infrastructure list (form §8). No placeholder coworking names. */
export const infrastructureItems = [
  { title: "Maker Space", image: imageSources.makerSpace, alt: "Maker Space", span: "large" },
  { title: "AI Drone Research Centre", image: imageSources.droneCentre, alt: "AI Drone Research Centre", span: "tall" },
  { title: "Design to Product Centre", image: imageSources.designToProduct, alt: "Design to Product Centre", span: "std" },
  { title: "Industrial Automation & Robotics (KUKA – JJ Centre)", image: imageSources.automation, alt: "KUKA – JJ Industrial Robotics Centre", span: "std" },
  { title: "Intel – AI Skill Centre", image: imageSources.deepTech, alt: "Intel AI Skill Centre", span: "wide" },
  { title: "CDAC JJ IoT Lab Centre", image: imageSources.iot, alt: "CDAC JJ IoT Lab Centre", span: "std" }
] as const;

/** One gallery group = a heading + its row of images (matches the official gallery format). */
export type GalleryImage = { src: string; alt: string; caption: string };
export type GalleryGroup = { id: string; title: string; images: GalleryImage[] };

export const galleryGroups: GalleryGroup[] = [
  {
    id: "fdp-government-schemes",
    title:
      "One-day FDP on “Government Schemes and Opportunities for Startups” by Mr. S. M. Manoj Kumar, Project Associate, StartupTN, Trichy Hub on 19.12.2026",
    images: [
      {
        src: imageSources.fdpGovtSchemes1,
        alt: "Invitation poster for the one-day Faculty Development Programme on Government Schemes and Opportunities for Startups",
        caption: "Official invitation poster",
      },
      {
        src: imageSources.fdpGovtSchemes2,
        alt: "Faculty Development Programme in progress at JJCET, Ammapettai",
        caption: "Session in progress",
      },
      {
        src: imageSources.fdpGovtSchemes3,
        alt: "Resource person leading a discussion with participants at the Faculty Development Programme",
        caption: "Interactive session",
      },
      {
        src: imageSources.fdpGovtSchemes4,
        alt: "Participants attending the Faculty Development Programme at JJCET, Ammapettai",
        caption: "Participants",
      }
    ],
  },
  {
    id: "campus",
    title: "JJCET Campus",
    images: [
      { src: imageSources.heroCampus, alt: "JJCET campus", caption: "J.J. College of Engineering and Technology campus" },
      { src: imageSources.campusGarden, alt: "JJCET campus garden", caption: "Campus gardens and academic blocks" },
      { src: imageSources.campusEntrance, alt: "JJCET campus entrance", caption: "Main entrance" }
    ],
  },
  {
    id: "incubation-hub",
    title: "JJCET-STIF Incubation Hub",
    images: [
      { src: imageSources.incubationHub, alt: "JJCET-STIF incubation hub", caption: "JJCET-STIF incubation hub" }
    ],
  },
  {
    id: "innovation",
    title: "Innovation & Infrastructure",
    images: [
      { src: imageSources.studentsInnovation, alt: "Student innovators at work", caption: "Student innovators at work" },
      { src: imageSources.designToProduct, alt: "Design to Product Centre", caption: "Design to Product Centre" },
      { src: imageSources.automation, alt: "Industrial automation", caption: "Industrial automation" }
    ],
  }
];

/** Flat list kept for the home-page preview strip. */
export const galleryItems: GalleryImage[] = galleryGroups.flatMap((g) => g.images);

export const supportInterestOptions = [
  "Mentorship",
  "Infrastructure Access",
  "Networking",
  "Investor Connect"
] as const;

export const fieldOfInterestOptions = [
  "Industrial Automation & Robotics",
  "Electric Vehicles & Embedded Systems",
  "AI-Driven Drone Technology",
  "IoT & Electronics",
  "Deep Tech & Emerging Technologies",
  "Other"
] as const;

/** Applicant type (form dropdown). Department + Year are asked only for Students. */
export const applicantTypeOptions = [
  "Student",
  "Exited",
  "Registered",
  "Early-Stage Startup"
] as const;

/** Current status of the idea / project (replaces the old Yes-No prototype question). */
export const currentStatusOptions = [
  "Idea",
  "POC",
  "Validated Prototype",
  "Revenue Stage"
] as const;

/** Published events. Empty until officially confirmed entries are added (admin CRUD later). */
export const events: ReadonlyArray<{
  slug: string;
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
  venue: string;
  desc: string;
}> = [];

/** Published ventures. Empty until officially confirmed entries are added. */
export const startups: ReadonlyArray<{
  slug: string;
  name: string;
  tagline: string;
  sector: string;
  initial: string;
}> = [];

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about#focus-areas", label: "Focus Areas" },
      { href: "/about#infrastructure", label: "Infrastructure" }
    ],
  },
  { href: "/pre-incubation", label: "Pre-Incubation" },
  { href: "/programs", label: "Achievements & Announcements" },
  { href: "/startups", label: "Startups" },
  { href: "/gallery", label: "Event Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/policies", label: "Policies" },
  { href: "/contact", label: "Contact" }
] as const;
