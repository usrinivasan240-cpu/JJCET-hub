"use client";

import { imageSources } from "@/config/imageSources";
import { SmartLogo } from "./SmartImage";

export function JjcetLogos() {
  return (
    <div className="brand__logos">
      <span className="logo-slot logo-slot--jjcet">
        <SmartLogo src={imageSources.jjcetLogo} alt="J.J. College of Engineering and Technology — official logo" height={74} fallbackLabel="JJCET logo" />
      </span>
      <span className="logo-slot logo-slot--stif">
        <SmartLogo src={imageSources.jjcetStifLogo} alt="JJCET-STIF — official logo" height={74} fallbackLabel="JJCET-STIF logo" />
      </span>
    </div>
  );
}

export default function BrandHeader() {
  return (
    <header className="brand">
      <div className="brand__inner">
        <div className="brand__left">
          <JjcetLogos />
          <div className="brand__divider" aria-hidden="true" />
          <div className="brand__title">
            <h1>JJCET <span>Sowdambikaa</span><br />Technology Incubation Foundation</h1>
            <p><span className="assoc">Section 8 Company</span> – A Pre-Incubation Center sanctioned by StartupTN</p>
          </div>
        </div>
        <div className="brand__right">
          <small>In Association with</small>
          <div className="brand__partners" role="list" aria-label="In association with">
            <span className="logo-slot logo-slot--partner" role="listitem" title="StartupTN">
              <SmartLogo src={imageSources.startupTNLogo} alt="StartupTN — official logo" height={58} fallbackLabel="StartupTN" />
            </span>
            <span className="logo-slot logo-slot--partner logo-slot--msme" role="listitem" title="Ministry of MSME">
              <SmartLogo src={imageSources.msmeLogo} alt="Ministry of Micro, Small and Medium Enterprises (MSME) — official logo" height={52} fallbackLabel="MSME" />
              <span className="partner-msme-name" aria-hidden="true">Ministry of<br />Micro, Small &amp;<br />Medium Enterprises</span>
            </span>
            <span className="logo-slot logo-slot--partner" role="listitem" title="National Board of Accreditation">
              <SmartLogo src={imageSources.nbaLogo} alt="National Board of Accreditation (NBA) — official logo" height={52} fallbackLabel="NBA" />
            </span>
            <span className="logo-slot logo-slot--partner" role="listitem" title="NAAC">
              <SmartLogo src={imageSources.naacLogo} alt="National Assessment and Accreditation Council (NAAC) — official logo" height={52} fallbackLabel="NAAC" />
            </span>
            <span className="logo-slot logo-slot--partner" role="listitem" title="AICTE">
              <SmartLogo src={imageSources.aicteLogo} alt="All India Council for Technical Education (AICTE) — official logo" height={52} fallbackLabel="AICTE" />
            </span>
            <span className="logo-slot logo-slot--partner" role="listitem" title="EDII">
              <SmartLogo src={imageSources.ediiLogo} alt="Entrepreneurship Development and Innovation Institute (EDII-TN), Government of Tamil Nadu — official logo" height={56} fallbackLabel="EDII" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
