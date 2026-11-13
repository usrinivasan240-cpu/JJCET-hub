"use client";

import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  label?: string;
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
 * Client-side image with zero broken-icon risk: renders the institutional
 * placeholder first, probes the file, and only swaps in the <img> once it
 * has provably loaded. Used inside client components (gallery, etc.).
 */
export default function SmartImage({ src, alt, className, label }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    const probe = new window.Image();
    probe.onload = () => setReady(true);
    probe.onerror = () => setReady(false);
    probe.src = src;
  }, [src]);

  if (!ready) return <Placeholder label={label || alt} className={className} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

/**
 * Client-side logo slot: shows the compact dashed fallback until the
 * official logo file provably loads. No node APIs — safe anywhere.
 */
export function SmartLogo({
  src,
  alt,
  height,
  fallbackLabel,
}: {
  src: string;
  alt: string;
  height: number;
  fallbackLabel: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    const probe = new window.Image();
    probe.onload = () => setReady(true);
    probe.onerror = () => setReady(false);
    probe.src = src;
  }, [src]);

  if (!ready) {
    return (
      <span className="logo-fallback" role="img" aria-label={alt}>
        {fallbackLabel}
      </span>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} style={{ height }} />;
}
