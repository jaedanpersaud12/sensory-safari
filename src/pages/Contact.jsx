import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const FAQ = [
  {
    q: 'Do I need to book Open Play in advance?',
    a: 'No — Open Play is first-come, first-served. For busy weekends we recommend arriving early or booking online to guarantee a slot.',
  },
  {
    q: 'What are grip socks and do you sell them?',
    a: 'Grip socks have rubber grips on the soles to prevent slipping. Every child and adult in the play area must wear them. We sell them at the front desk if you forget yours.',
  },
  {
    q: 'Up to what age can children play?',
    a: 'The playground is designed for children up to 13 years old.',
  },
  {
    q: 'Are you open on public holidays?',
    a: 'Yes — we\u2019re open every day, including public holidays, from 10 AM to 7 PM.',
  },
  {
    q: 'Can I drop my child off?',
    a: 'No. A parent or guardian must stay on-site and supervise at all times.',
  },
  {
    q: 'Do you accommodate children with disabilities?',
    a: 'Absolutely — the space was designed with sensory diversity in mind. Reach out ahead of time and we\u2019ll help plan a comfortable visit.',
  },
];

function FAQItem({ item, open, onToggle }) {
  return (
    <div className={'faq-item' + (open ? ' faq-item--open' : '')}>
      <button type="button" className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className="faq-a">{item.a}</div>}
    </div>
  );
}

export default function Contact() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="contact-page">
      <section className="page-hero page-hero--turquoise">
        <div className="page-hero-inner page-hero-inner--centered">
          <div className="page-hero-copy">
            <div className="home-eyebrow home-eyebrow--light">Contact</div>
            <h1>Come say hi.</h1>
            <p>Questions, bookings, or a birthday idea — we'd love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="contact-details-grid">
          <a className="contact-card" href="https://maps.google.com/?q=237+Western+Main+Rd+Cocorite" target="_blank" rel="noreferrer">
            <svg className="contact-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div className="contact-card-label">Visit</div>
              <div className="contact-card-value">Bayside Shopping Centre</div>
              <div className="contact-card-sub">237 Western Main Rd, Cocorite</div>
            </div>
          </a>

          <a className="contact-card" href="tel:+18682520007">
            <svg className="contact-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <div className="contact-card-label">Call</div>
              <div className="contact-card-value">1 (868) 252-0007</div>
              <div className="contact-card-sub">Mon – Sun, 10 AM – 7 PM</div>
            </div>
          </a>

          <a className="contact-card" href="mailto:sensorysafaritt@gmail.com">
            <svg className="contact-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <div>
              <div className="contact-card-label">Email</div>
              <div className="contact-card-value">sensorysafaritt@gmail.com</div>
              <div className="contact-card-sub">Replies within 24 hours</div>
            </div>
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-grid">
          <div className="contact-form-copy">
            <h2 className="section-kicker">Send us a message</h2>
            <p>
              For general questions, booking requests, group visits, or feedback.
              We usually reply within a day.
            </p>
            <ImagePlaceholder label="Map of Cocorite location" aspect="4 / 3" rounded={16} />
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Contact form is a placeholder — connect to a real backend.');
            }}
          >
            <div className="book-fields">
              <label className="field">
                <span>Your name</span>
                <input type="text" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" required />
              </label>
              <label className="field">
                <span>Subject</span>
                <select>
                  <option>General question</option>
                  <option>Booking / availability</option>
                  <option>Birthday party</option>
                  <option>Group / school visit</option>
                  <option>Feedback</option>
                </select>
              </label>
              <label className="field">
                <span>Message</span>
                <textarea rows="5" required />
              </label>
            </div>
            <button type="submit" className="book-btn book-btn--wide">
              Send message
            </button>
          </form>
        </div>
      </section>

      <section className="contact-faq-section">
        <div className="contact-faq-inner">
          <h2 className="section-kicker">Frequently asked</h2>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-volunteer">
        <div className="contact-volunteer-inner">
          <div>
            <h2>Want to volunteer?</h2>
            <p>
              Creatives, caregivers, healthcare workers, therapists — we welcome
              helpers who bring joy, patience, and presence.
            </p>
          </div>
          <Link to="/contact" className="book-btn book-btn--light">
            Apply to volunteer
          </Link>
        </div>
      </section>
    </div>
  );
}
