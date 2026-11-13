import Link from "next/link";
import Reveal from "./Reveal";
import { events } from "@/data/content";

export default function EventsSection({ preview = false }: { preview?: boolean }) {
  const list = preview ? events.slice(0, 3) : events;

  return (
    <section className="section section--tint" aria-labelledby="events-heading">
      <div className="container">
        <Reveal className="center">
          <div style={{ display: "flex", justifyContent: "center" }}><span className="pill">Happenings</span></div>
          <h2 className="h2" id="events-heading">Latest <span className="accent">Updates</span></h2>
          <p className="lead">Workshops, seminars and mentoring sessions at JJCET-STIF.</p>
        </Reveal>

        {list.length === 0 ? (
          <div style={{ marginTop: 34 }}>
            <div className="empty">
              <h3>Details will be announced soon.</h3>
              <p>Upcoming JJCET-STIF programmes and official activities will appear here.</p>
              <Link href="/register" className="btn btn--navy">Register Your Interest <span className="arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        ) : (
          <>
            <div className="event-grid" style={{ marginTop: 36 }}>
              {list.map((e, i) => (
                <Reveal key={e.slug} delay={(i % 3) * 80}>
                  <article className="event-card">
                    <div className="event-card__date" aria-label={`${e.day} ${e.month} ${e.year}`}>
                      <b>{e.day}</b>
                      <span>{e.month}<br />{e.year}</span>
                    </div>
                    <div className="event-card__body">
                      <div className="event-card__meta"><span>{e.category}</span><span>{e.venue}</span></div>
                      <h3>{e.title}</h3>
                      <p>{e.desc}</p>
                      <Link href="/programs" className="link-more">View Details →</Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            {preview && (
              <div className="center" style={{ marginTop: 26 }}>
                <Link href="/programs" className="btn btn--outline">All Events <span className="arr" aria-hidden="true">→</span></Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
