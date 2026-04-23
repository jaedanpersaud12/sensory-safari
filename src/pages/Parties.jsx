import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const INCLUDES = [
  'Private party room',
  'Fridge & sink',
  'Tables & chairs for children',
  'Full playground access during your slot',
  'Lockers for bags',
];

const POLICIES = [
  {
    title: 'Space only',
    body: 'Sensory Safari provides the room. Decorations, food, and supplies are yours to bring.',
  },
  {
    title: 'Food stays put',
    body: 'Eating is confined to the party room — no food, drinks, or gum in the play area.',
  },
  {
    title: 'Clean-up required',
    body: 'Please take all garbage with you. A $600 fee applies if the space is left un-cleared.',
  },
  {
    title: '72-hour cancellation',
    body: 'Cancellations within 72 hours of your booking forfeit the security deposit.',
  },
];

export default function Parties() {
  return (
    <div className="parties-page">
      <section className="page-hero page-hero--orange">
        <div className="page-hero-inner">
          <div className="page-hero-copy">
            <div className="home-eyebrow home-eyebrow--light">Birthday parties</div>
            <h1>Throw the kind of party every kid remembers.</h1>
            <p>
              A private party room, a whole playground, and hours of joyful
              chaos. You bring the cake — we bring the zipline.
            </p>
            <Link to="/contact" className="book-btn book-btn--light">
              Check availability
            </Link>
          </div>
          <div className="page-hero-visual">
            <ImagePlaceholder label="Party room photo" aspect="4 / 3" rounded={24} tone="cream" />
          </div>
        </div>
      </section>

      <section className="parties-includes">
        <div className="parties-includes-inner">
          <h2 className="section-kicker">What's included</h2>
          <div className="parties-includes-grid">
            <ul className="includes-list">
              {INCLUDES.map((item) => (
                <li key={item}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <ImagePlaceholder label="Kids celebrating" aspect="4 / 3" rounded={20} />
          </div>
        </div>
      </section>

      <section className="parties-policies">
        <div className="parties-policies-inner">
          <h2 className="section-kicker">Good to know</h2>
          <div className="policies-grid">
            {POLICIES.map((p) => (
              <div key={p.title} className="policy-card">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="parties-cta">
        <div className="parties-cta-inner">
          <h2>Let's get your date on the calendar.</h2>
          <p>Reach out by phone or email to check availability and lock in your slot.</p>
          <div className="parties-cta-actions">
            <a href="tel:+18682520007" className="book-btn">
              Call 1 (868) 252-0007
            </a>
            <a href="mailto:sensorysafaritt@gmail.com" className="ghost-btn">
              Send email →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
