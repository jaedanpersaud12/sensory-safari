import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'open-play',
    eyebrow: 'Drop in',
    title: 'Open Play',
    price: '$150',
    priceUnit: '/ 90 min',
    blurb:
      'Explore the full playground at your own pace — no booking, just show up and play.',
    includes: [
      '1 child + 1 adult/guardian',
      'Access to every zone (except the party room)',
      'Each additional adult: $50',
    ],
    highlight: true,
  },
  {
    id: 'school-passes',
    eyebrow: 'For groups',
    title: 'School & Group Passes',
    price: 'Custom',
    priceUnit: 'quote',
    blurb:
      'Bring your classroom, therapy group, or community program for a private sensory session.',
    includes: [
      'Reserved time slot, whole space or zone',
      'Staff on-hand to support diverse needs',
      'Tailored for typical and differently-abled children',
    ],
  },
  {
    id: 'parties',
    eyebrow: 'Celebrate',
    title: 'Birthday Parties',
    price: 'Book',
    priceUnit: 'the room',
    blurb:
      'Party room with fridge, sink, tables and chairs — you bring the cake, decorations, and crew.',
    includes: [
      'Dedicated party room (separate from play area)',
      'Space-only rental — decor & food up to you',
      '72-hour cancellation policy applies',
    ],
  },
];

const ZONES = [
  'Climbers',
  'Suspended swings',
  'Zipline',
  'Trampoline',
  'Ride-on toys',
  'Basketball area',
  'Busy boards',
  'Dress-up costumes',
  'Calming snoezelen room',
];

const RULES = [
  'Grip socks required for children and adults (available for purchase).',
  'Maximum child age: 13 years old.',
  'Parental supervision required at all times.',
  'No food, drinks, or gum inside the playground.',
  'Shoes off, bags in lockers.',
  'One rider at a time on swings and zipline; up to four on the trampoline.',
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero page-hero--cream">
        <div className="page-hero-inner page-hero-inner--centered">
          <div className="page-hero-copy">
            <h1>Three ways to play.</h1>
            <p>
              Whether it's an afternoon adventure, a school outing, or a birthday
              worth remembering — we've got a space for it.
            </p>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {SERVICES.map((s) => (
            <article
              key={s.id}
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
              <Link to="/book" className="service-card-cta">
                Book now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-zones">
        <div className="services-zones-inner">
          <div className="services-zones-head">
            <h3 className="section-kicker">What's inside the Safari</h3>
            <p>Every Open Play ticket unlocks the whole playground.</p>
          </div>
          <ul className="facilities-list">
            {ZONES.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-rules">
        <div className="services-rules-inner">
          <h3 className="section-kicker">Before you come</h3>
          <ul className="rules-list">
            {RULES.map((rule, i) => (
              <li key={i}>
                <span className="rules-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
