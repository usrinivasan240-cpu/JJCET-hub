/** Inline SVG icon set — clean institutional outline icons. */
export function Icon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  switch (name) {
    case "users":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
    case "bulb":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>);
    case "layers":
      return (<svg viewBox="0 0 24 24" {...common}><path d="m12 2 10 5.7L12 13.3 2 7.7 12 2z"/><path d="m2 12.3 10 5.7 10-5.7M2 16.9l10 5.7 10-5.7"/></svg>);
    case "compass":
      return (<svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="10"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8z"/></svg>);
    case "rocket":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.1-.7-3 .8z"/><path d="M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/></svg>);
    case "mentor":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 10v6"/></svg>);
    case "prototype":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z"/></svg>);
    case "infra":
      return (<svg viewBox="0 0 24 24" {...common}><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M2 11h20M6 3v4M18 3v4M9 14h6"/></svg>);
    case "network":
      return (<svg viewBox="0 0 24 24" {...common}><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.7 7.3 15.3 16.7M15.3 7.3l-6.6 9.4M9 6h6M9 18h6"/></svg>);
    case "cowork":
      return (<svg viewBox="0 0 24 24" {...common}><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20M8 20v-4h8v4"/></svg>);
    case "investor":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>);
    case "maker":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>);
    case "drone":
      return (<svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M6.5 6.5 10 10M18 6l-3.5 3.5M6.5 17.5 10 14M18 18l-3.5-3.5"/></svg>);
    case "design":
      return (<svg viewBox="0 0 24 24" {...common}><path d="m12 19 7-7a4.95 4.95 0 1 0-7-7l-7 7v7h7z"/><path d="m18 13-5-5M5 21l3.5-3.5"/></svg>);
    case "check":
      return (<svg viewBox="0 0 24 24" {...common}><path d="M20 6 9 17l-5-5"/></svg>);
    default:
      return (<svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9"/></svg>);
  }
}
