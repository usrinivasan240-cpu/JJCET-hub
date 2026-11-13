import Link from "next/link";

export default function EmptyState({
  title,
  text,
  ctaHref = "/register",
  ctaLabel = "Register Your Interest",
}: {
  title: string;
  text: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href={ctaHref} className="btn btn--navy">{ctaLabel} <span className="arr" aria-hidden="true">→</span></Link>
    </div>
  );
}
