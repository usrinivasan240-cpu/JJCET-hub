import { siteMeta } from "@/data/content";

export default function TopBar() {
  return (
    <div className="topbar" role="banner" aria-label="Contact information">
      <div className="topbar__inner">
        <div className="topbar__left">
          <a className="topbar__item" href={`tel:${siteMeta.phones[0]}`} aria-label={`Call ${siteMeta.phones[0]}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.8.6a2 2 0 0 1 1.7 2z" /></svg>
            <span>{siteMeta.phones[0]}, <span className="topbar__item--phone2">{siteMeta.phones[1]}</span></span>
          </a>
          <a className="topbar__item" href={`mailto:${siteMeta.email}`} aria-label={`Email ${siteMeta.email}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
            <span>{siteMeta.email}</span>
          </a>
          <span className="topbar__item topbar__item--addr" aria-label="Address">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
            <span>J.J. College of Engineering and Technology, Ammapettai, Tiruchirappalli – 620 009</span>
          </span>
        </div>
      </div>
    </div>
  );
}
