"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import BrandHeader from "@/components/BrandHeader";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/Shared";
import { galleryGroups } from "@/data/content";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <>
      <TopBar /><BrandHeader /><MainNavigation />
      <main>
        <PageHero
          crumb="Event Gallery"
          title="Event Gallery"
          text="Official photographs from JJCET-STIF events, along with campus and incubation moments — grouped by event."
        />
        <section className="section">
          <div className="container">
            {galleryGroups.map((group) => (
              <div className="ev-group" key={group.id}>
                <Reveal>
                  <h2 className="ev-group__title">{group.title}</h2>
                </Reveal>
                <div className="ev-group__row">
                  {group.images.map((img, i) => (
                    <Reveal key={img.src + i} delay={(i % 4) * 70}>
                      <figure className="g-card">
                        <button
                          className="g-card__media"
                          onClick={() => setLightbox({ src: img.src, caption: img.caption })}
                          aria-label={`Open image: ${img.caption}`}
                        >
                          <SmartImage src={img.src} alt={img.alt} label={img.alt} />
                        </button>
                        <figcaption className="g-card__body">
                          <h3>{img.caption}</h3>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label="Image preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.src} alt={lightbox.caption} />
          <p className="lightbox__caption">{lightbox.caption}</p>
          <button aria-label="Close preview" onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </>
  );
}
