import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const FEATURES = [
  {
    title: 'Fully inclusive',
    body: 'Designed for every ability — typical and differently-abled children play side by side.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Sensory-first',
    body: 'Calming Snoezelen room, crash mats, and zones tuned for sensory diversity.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
      </svg>
    ),
  },
  {
    title: 'Built for movement',
    body: 'Ziplines, trampolines, climbers, swings — all the ways kids need to move.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Open every day',
    body: 'Seven days a week, 10 AM – 7 PM. Open on public holidays too.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

const SERVICES = [
  {
    eyebrow: 'Drop in',
    title: 'Open Play',
    price: '$150',
    priceUnit: '/ 90 min',
    blurb: 'Explore the full playground at your own pace — no booking, just show up and play.',
    includes: [
      '1 child + 1 adult/guardian',
      'Access to every zone',
      'Each additional adult: $50',
    ],
    to: '/book',
    highlight: true,
  },
  {
    eyebrow: 'For groups',
    title: 'School & Group',
    price: 'Custom',
    priceUnit: 'quote',
    blurb: 'Bring your classroom, therapy group, or community program for a private session.',
    includes: [
      'Reserved time slot',
      'Staff support for diverse needs',
      'Whole space or zone',
    ],
    to: '/services',
  },
  {
    eyebrow: 'Celebrate',
    title: 'Birthday Parties',
    price: 'Book',
    priceUnit: 'the room',
    blurb: 'Party room with fridge, sink, tables and chairs — you bring the cake.',
    includes: [
      'Dedicated party room',
      'Space-only rental',
      '72-hour cancellation',
    ],
    to: '/parties',
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <div className="home-eyebrow">A sensory gym in Cocorite</div>
            <h1>
              Where every kid gets to <span className="accent">play like a kid.</span>
            </h1>
            <p>
              Trinidad &amp; Tobago's first fully inclusive sensory playground —
              built for kids of all abilities to climb, swing, and explore together.
            </p>
            <div className="home-hero-actions">
              <Link to="/book" className="book-btn">
                Book Open Play
              </Link>
              <Link to="/about" className="ghost-btn">
                Our story →
              </Link>
            </div>
            <div className="home-hero-meta">
              <div>
                <strong>Open 7 days</strong>
                <span>10 AM – 7 PM</span>
              </div>
              <div className="home-hero-meta-sep" />
              <div>
                <strong>Ages 0 – 13</strong>
                <span>Grip socks required</span>
              </div>
            </div>
          </div>
          <div className="home-hero-visual">
            <ImagePlaceholder
              label="Hero image"
              aspect="4 / 5"
              rounded={28}
              tone="orange"
              icon={
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              }
            />
            <div className="home-hero-badge">
              <div className="home-hero-badge-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <div className="home-hero-badge-title">Opened Nov 2025</div>
                <div className="home-hero-badge-sub">New in Trinidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-features-inner">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-tile">
              <div className="feature-tile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-services">
        <div className="home-services-inner">
          <div className="home-services-head">
            <h2 className="section-kicker">Ways to play</h2>
            <Link to="/services" className="text-link">
              See all services →
            </Link>
          </div>
          <div className="home-services-grid">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className={'service-card' + (s.highlight ? ' service-card--highlight' : '')}
              >
                <div className="service-card-eyebrow">{s.eyebrow}</div>
                <h3 className="service-card-title">{s.title}</h3>
                <div className="service-card-price">
                  <span className="service-card-price-big">{s.price}</span>
                  <span className="service-card-price-unit">{s.priceUnit}</span>
                </div>
                <p className="service-card-blurb">{s.blurb}</p>
                <ul className="service-card-list">
                  {s.includes.map((item) => (
                    <li key={item}>
                      <svg
                        className="check-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={s.to} className="service-card-cta">
                  {s.to === '/book' ? 'Book now' : 'Learn more'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-inner">
          <div className="home-about-visual">
            <ImagePlaceholder
              label="Founder & child photo"
              aspect="4 / 5"
              rounded={24}
              tone="turquoise"
            />
          </div>
          <div className="home-about-copy">
            <div className="home-eyebrow">Our story</div>
            <h2>Built by a mother, for every child.</h2>
            <p>
              Founder Marie Simonet created Sensory Safari after searching
              endlessly for a play space that welcomed her son Luka, who is
              blind. She couldn't find one in Trinidad — so she built it.
            </p>
            <Link to="/about" className="book-btn">
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      <section className="home-gallery-tease">
        <div className="home-gallery-tease-inner">
          <div className="home-gallery-head">
            <h2 className="section-kicker">Inside the Safari</h2>
            <Link to="/gallery" className="text-link">
              Full gallery →
            </Link>
          </div>
          <div className="home-gallery-grid">
            <ImagePlaceholder label="Zipline zone" aspect="1 / 1" rounded={18} />
            <ImagePlaceholder label="Trampoline" aspect="1 / 1" rounded={18} />
            <ImagePlaceholder label="Calming room" aspect="1 / 1" rounded={18} />
            <ImagePlaceholder label="Climbers" aspect="1 / 1" rounded={18} />
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-inner">
          <h2>Ready for an adventure?</h2>
          <p>No reservation needed for Open Play. Come visit us in Cocorite.</p>
          <div className="home-cta-actions">
            <Link to="/book" className="book-btn">
              Book Online
            </Link>
            <Link to="/contact" className="ghost-btn">
              Get directions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
