import Link from "next/link";
import { siteMeta } from "@/data/content";

export function PageHero({ title, text, crumb }: { title: string; text: string; crumb: string }) {
  return (
    <div className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; {crumb}</nav>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="contact-cards">
      <div className="contact-card">
        <h3>Phone</h3>
        <p><a href={`tel:${siteMeta.phones[0]}`}>{siteMeta.phones[0]}</a><br /><a href={`tel:${siteMeta.phones[1]}`}>{siteMeta.phones[1]}</a></p>
      </div>
      <div className="contact-card">
        <h3>Email</h3>
        <p><a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></p>
      </div>
      <div className="contact-card">
        <h3>Address</h3>
        <p>{siteMeta.address.line1}<br />{siteMeta.address.line2}<br />{siteMeta.address.line3}</p>
      </div>
    </div>
  );
}
