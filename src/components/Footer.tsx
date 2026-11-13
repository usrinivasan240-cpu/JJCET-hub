import Link from "next/link";
import { siteMeta } from "@/data/content";
import { JjcetLogos } from "./BrandHeader";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logos"><JjcetLogos /></div>
          <p>
            <strong style={{ color: "#fff" }}>JJCET Sowdambikaa Technology Incubation Foundation</strong>
            <br />A Section 8 Company and Pre-Incubation Centre sanctioned by StartupTN.
          </p>
          <p style={{ fontSize: 13 }}>J.J. College of Engineering and Technology,<br />Ammapettai, Tiruchirappalli – 620 009</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about#focus-areas">Focus Areas</Link></li>
            <li><Link href="/about#infrastructure">Infrastructure</Link></li>
            <li><Link href="/pre-incubation">Pre-Incubation</Link></li>
            <li><Link href="/startups">Startups</Link></li>
            <li><Link href="/programs">Events</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            <li><Link href="/gallery">Event Gallery</Link></li>
            <li><Link href="/policies">Policies</Link></li>
            <li><Link href="/programs">Achievements &amp; Announcements</Link></li>
            <li><Link href="/register">Register Your Interest</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div className="footer__contact">
            <a href={`tel:${siteMeta.phones[0]}`}>{siteMeta.phones[0]}</a>
            <a href={`tel:${siteMeta.phones[1]}`}>{siteMeta.phones[1]}</a>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            <span>{siteMeta.address.line1}<br />{siteMeta.address.line2}<br />{siteMeta.address.line3}</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {year} JJCET-STIF. All Rights Reserved. Designed by JJCET.</span>
        <nav aria-label="Legal">
          <Link href="/policies">Privacy Policy</Link>
          <Link href="/policies">Terms &amp; Conditions</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </nav>
      </div>
    </footer>
  );
}
