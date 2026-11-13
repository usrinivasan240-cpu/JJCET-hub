"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

type NavItem = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

export default function MainNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (item: NavItem) =>
    pathname === item.href ||
    (item.children ?? []).some((c) => pathname === c.href);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} aria-label="Main navigation">
      <div className="nav__inner">
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M18 6 6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          )}
        </button>
        <div className="nav__links">
          {(navLinks as readonly NavItem[]).map((l) => {
            const active = isActive(l);
            if (!l.children) {
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={active ? "active" : ""}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <div className="nav__item" key={l.href}>
                <Link
                  href={l.href}
                  className={active ? "active" : ""}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.label}
                  <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                </Link>
                <div className="nav__sub" role="menu" aria-label={`${l.label} submenu`}>
                  {l.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      role="menuitem"
                      className={pathname === c.href ? "active" : ""}
                      aria-current={pathname === c.href ? "page" : undefined}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="nav__cta">
          <Link href="/register" className="btn btn--primary">
            Register Your Interest <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div id="mobile-menu" className={`nav__mobile ${open ? "open" : ""}`}>
        {(navLinks as readonly NavItem[]).map((l) => (
          <div key={l.href}>
            <Link href={l.href} className={isActive(l) ? "active" : ""} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
            {l.children && (
              <div className="nav__mobile-sub">
                {l.children.map((c) => (
                  <Link key={c.href} href={c.href} className={pathname === c.href ? "active" : ""} aria-current={pathname === c.href ? "page" : undefined}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
