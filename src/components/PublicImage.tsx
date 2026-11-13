import fs from "node:fs";
import path from "node:path";

/** Server-side check: does this /public/... file actually exist on disk? */
export function publicFileExists(src: string): boolean {
  const rel = src.startsWith("/") ? src.slice(1) : src;
  if (rel.includes("..")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", rel));
  } catch {
    return false;
  }
}

function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`img-fallback ${className ?? ""}`} role="img" aria-label={label}>
      <span className="img-fallback__ring" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-4.5-4.5L6 21" />
        </svg>
      </span>
      <span className="img-fallback__label">{label}</span>
      <span className="img-fallback__soon">Official image coming soon</span>
    </div>
  );
}

/**
 * Deterministic server-rendered image.
 * File exists on disk  -> real <img> (never 404s).
 * File missing          -> designed institutional placeholder (never a broken icon).
 * Just drop official files into /public/images/ — they appear instantly,
 * no rebuild needed, no code changes needed.
 */
export default function PublicImage({
  src,
  alt,
  className,
  eager,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  label?: string;
}) {
  if (!publicFileExists(src)) {
    return <Placeholder label={label || alt} className={className} />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
