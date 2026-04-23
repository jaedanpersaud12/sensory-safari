function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="utility-inner">
        <ul className="utility-contacts">
          <li>
            <PinIcon />
            <span className="utility-text utility-text--long">
              Bayside Shopping Centre, 237 Western Main Rd, Cocorite
            </span>
            <span className="utility-text utility-text--short">Cocorite, T&amp;T</span>
          </li>
          <li>
            <MailIcon />
            <a href="mailto:sensorysafaritt@gmail.com">
              <span className="utility-text utility-text--long">sensorysafaritt@gmail.com</span>
              <span className="utility-text utility-text--short">Email</span>
            </a>
          </li>
          <li>
            <PhoneIcon />
            <a href="tel:+18682520007">1 (868) 252-0007</a>
          </li>
        </ul>
        <button type="button" className="login-btn">
          <UserIcon />
          <span>Log In</span>
        </button>
      </div>
    </div>
  );
}
