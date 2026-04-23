import { Link } from 'react-router-dom';

const VALUES = [
  {
    title: 'Inclusion',
    body: 'Every ability welcome. No judgment, no stares — just kids being kids.',
  },
  {
    title: 'Movement & Discovery',
    body: 'Space to climb, swing, zip, and explore safely at every child\u2019s own pace.',
  },
  {
    title: 'Community Learning',
    body: 'Typical and differently-abled kids play side by side — empathy grows naturally.',
  },
  {
    title: 'Parental Support',
    body: 'A judgment-free room where caregivers can breathe, connect, and share.',
  },
];

const FACILITIES = [
  'Suspended swings',
  'Crash mats',
  'Ziplines',
  'Trampolines',
  'Climbing structures',
  'Fine motor stations',
  'Snoezelen calming room',
  'Arts & crafts corner',
  'On-site café',
];

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero page-hero--cream">
        <div className="page-hero-inner page-hero-inner--centered">
          <div className="page-hero-copy">
            <h1>Built by a mother, for every child.</h1>
            <p>
              Sensory Safari was born out of a simple, stubborn question Marie
              Simonet couldn't shake: <em>why don't we have this back home?</em>
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-story-body">
            <p>
              Marie's son, Luka, is completely blind. In Trinidad &amp; Tobago,
              finding a play space that welcomed him was almost impossible —
              most venues were visually overwhelming, arcade-focused, or simply
              not built for children with diverse needs.
            </p>
            <p>
              Then, on a trip abroad, Luka stepped into an accessible sensory
              space and came alive. He climbed. He swung. He belonged.
            </p>
            <blockquote className="about-quote">
              <span className="about-quote-mark">&ldquo;</span>
              <p>
                I couldn't stop thinking: why don't we have this back home?
              </p>
              <footer>— Marie Simonet, Founder</footer>
            </blockquote>
            <p>
              Marie came home and got to work. In November 2025, Sensory Safari
              opened its doors at Ameerah's Bayside Shopping Centre in
              Cocorite — a space built from the ground up to meet every child
              where they are.
            </p>
          </div>

          <aside className="about-story-card">
            <div className="about-story-card-label">Founded</div>
            <div className="about-story-card-big">Nov 2025</div>
            <div className="about-story-card-sep" />
            <div className="about-story-card-label">Location</div>
            <div className="about-story-card-small">
              Ameerah's Bayside Shopping Centre
              <br />
              237 Western Main Rd, Cocorite
            </div>
            <div className="about-story-card-sep" />
            <div className="about-story-card-label">Hours</div>
            <div className="about-story-card-small">
              Mon – Sun, 10 AM – 7 PM
              <br />
              Open on public holidays
            </div>
          </aside>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-inner">
          <h3 className="section-kicker">What we stand for</h3>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-card-num" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 16 16">
                    <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="var(--orange)" />
                  </svg>
                </div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-facilities">
        <div className="about-facilities-inner">
          <h3 className="section-kicker">What's inside the Safari</h3>
          <p className="about-facilities-lede">
            Every zone is designed with sensory diversity in mind — spaces to
            move fast, and spaces to slow down.
          </p>
          <ul className="facilities-list">
            {FACILITIES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner">
          <h3>Come see the space.</h3>
          <p>Open Play runs seven days a week. No booking required.</p>
          <Link to="/services" className="book-btn book-btn--light">
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}
