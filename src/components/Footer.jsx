import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <svg
        className="footer-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-card">
            <img src="/logo.png" alt="Sensory Safari" className="footer-logo" />
          </div>
          <p className="footer-tagline">
            The gym for all kids — a safe, sensory-rich play space where every
            child can explore, move, and make friends.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/sensorysafaritt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/sensorysafaritt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="mailto:sensorysafaritt@gmail.com"
              aria-label="Email"
              className="footer-social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Explore</div>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/parties">Parties</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Book &amp; Play</div>
          <Link to="/book">Book Online</Link>
          <Link to="/waiver">Sign Waiver</Link>
          <Link to="/rewards">My Rewards</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col footer-col--visit">
          <div className="footer-heading">Visit Us</div>
          <div className="footer-contact-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div>Bayside Shopping Centre</div>
              <div>237 Western Main Rd, Cocorite</div>
              <div>Trinidad &amp; Tobago</div>
            </div>
          </div>
          <a className="footer-contact-row" href="tel:+18682520007">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
            </svg>
            <span>1 (868) 252-0007</span>
          </a>
          <a className="footer-contact-row" href="mailto:sensorysafaritt@gmail.com">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>sensorysafaritt@gmail.com</span>
          </a>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Hours</div>
          <div className="footer-hours">
            <div><span>Mon – Fri</span><strong>10am – 6pm</strong></div>
            <div><span>Saturday</span><strong>9am – 7pm</strong></div>
            <div><span>Sunday</span><strong>10am – 5pm</strong></div>
          </div>
          <Link to="/book" className="footer-book-btn">
            Book a Visit
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {year} Sensory Safari. All rights reserved.
        </div>
        <div className="footer-legal">
          <Link to="/waiver">Waiver</Link>
          <span aria-hidden="true">•</span>
          <Link to="/contact">Contact</Link>
          <span aria-hidden="true">•</span>
          <span>Made with care in T&amp;T</span>
        </div>
      </div>
    </footer>
  );
}
