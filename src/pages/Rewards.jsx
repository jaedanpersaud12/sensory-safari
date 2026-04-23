import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const TIERS = [
  {
    name: 'Explorer',
    points: '0 – 499',
    perks: ['1 pt per $1 spent', 'Birthday month discount', 'Early party booking window'],
    tone: 'cream',
  },
  {
    name: 'Adventurer',
    points: '500 – 1,999',
    perks: ['1.25 pts per $1', 'Priority weekend slots', '10% off in-gym purchases', 'Free grip socks every quarter'],
    tone: 'orange',
    highlight: true,
  },
  {
    name: 'Safari VIP',
    points: '2,000+',
    perks: ['1.5 pts per $1', 'One free Open Play per month', '15% off parties', 'Exclusive after-hours event invites'],
    tone: 'turquoise',
  },
];

const EARN_METHODS = [
  { action: 'Open Play visit', points: '+150 pts', icon: '🎟️' },
  { action: 'Referring a friend', points: '+250 pts', icon: '🤝' },
  { action: 'Booking a party', points: '+500 pts', icon: '🎉' },
  { action: 'Leaving a review', points: '+50 pts', icon: '⭐' },
];

export default function Rewards() {
  return (
    <div className="rewards-page">
      <section className="page-hero page-hero--orange">
        <div className="page-hero-inner">
          <div className="page-hero-copy">
            <div className="home-eyebrow home-eyebrow--light">My Rewards</div>
            <h1>Play more. Earn more. Play again.</h1>
            <p>
              Our loyalty program turns every visit into perks — from birthday
              treats to exclusive after-hours events.
            </p>
            <div className="rewards-cta-row">
              <Link to="/book" className="book-btn book-btn--light">
                Join the program
              </Link>
              <a href="#tiers" className="ghost-btn ghost-btn--light">
                See tiers →
              </a>
            </div>
          </div>
          <div className="page-hero-visual">
            <ImagePlaceholder
              label="Rewards card mockup"
              aspect="4 / 3"
              rounded={20}
              tone="cream"
            />
          </div>
        </div>
      </section>

      <section className="rewards-earn">
        <div className="rewards-earn-inner">
          <h2 className="section-kicker">Earn points every way</h2>
          <div className="earn-grid">
            {EARN_METHODS.map((m) => (
              <div key={m.action} className="earn-tile">
                <div className="earn-tile-icon" aria-hidden="true">{m.icon}</div>
                <div className="earn-tile-body">
                  <div className="earn-tile-action">{m.action}</div>
                  <div className="earn-tile-points">{m.points}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rewards-tiers" id="tiers">
        <div className="rewards-tiers-inner">
          <div className="rewards-tiers-head">
            <h2 className="section-kicker">Three tiers of fun</h2>
            <p>Climb the ranks just by doing what you're already doing — playing.</p>
          </div>
          <div className="tiers-grid">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={'tier-card' + (t.highlight ? ' tier-card--highlight' : '')}
              >
                <div className="tier-card-head">
                  <div className="tier-card-name">{t.name}</div>
                  <div className="tier-card-points">{t.points} pts</div>
                </div>
                <ul className="tier-perks">
                  {t.perks.map((p) => (
                    <li key={p}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rewards-account">
        <div className="rewards-account-inner">
          <div className="rewards-account-card">
            <div className="home-eyebrow">Member portal</div>
            <h2>Sign in to track your points.</h2>
            <p>
              Check your balance, see reward history, and unlock perks — all in one place.
              This is a preview; full member portal coming soon.
            </p>
            <div className="rewards-account-actions">
              <button type="button" className="book-btn" onClick={() => alert('Sign-in is a placeholder.')}>
                Sign in
              </button>
              <button type="button" className="ghost-btn" onClick={() => alert('Create account flow is a placeholder.')}>
                Create an account →
              </button>
            </div>
          </div>
          <div className="rewards-account-visual">
            <ImagePlaceholder label="Account screen mockup" aspect="1 / 1" rounded={20} tone="turquoise" />
          </div>
        </div>
      </section>
    </div>
  );
}
