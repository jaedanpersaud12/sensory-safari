import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const SERVICES = [
  { id: 'open-play', label: 'Open Play', price: 150, unit: '90 min' },
  { id: 'party', label: 'Birthday Party', price: 'Quote', unit: 'room' },
  { id: 'group', label: 'School / Group', price: 'Quote', unit: 'session' },
];

const SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '1:00 PM',
  '2:30 PM',
  '4:00 PM',
  '5:30 PM',
];

function todayIso() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${month}-${day}`;
}

export default function Book() {
  const [service, setService] = useState('open-play');
  const [date, setDate] = useState(todayIso());
  const [slot, setSlot] = useState('10:00 AM');
  const [kids, setKids] = useState(1);
  const [adults, setAdults] = useState(1);

  const selected = SERVICES.find((s) => s.id === service);
  const extraAdults = Math.max(0, adults - 1);
  const total = service === 'open-play' ? 150 + extraAdults * 50 : null;

  return (
    <div className="book-page">
      <section className="page-hero page-hero--turquoise">
        <div className="page-hero-inner page-hero-inner--centered">
          <div className="page-hero-copy">
            <div className="home-eyebrow home-eyebrow--light">Book online</div>
            <h1>Reserve your spot.</h1>
            <p>
              Pick a day, a time, and a service — we'll have grip socks ready and
              the zipline warmed up.
            </p>
          </div>
        </div>
      </section>

      <section className="book-section">
        <div className="book-layout">
          <form
            className="book-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Booking flow is a placeholder — connect to a real backend.');
            }}
          >
            <div className="book-step">
              <div className="book-step-num">01</div>
              <div className="book-step-body">
                <h3>Choose your service</h3>
                <div className="book-options">
                  {SERVICES.map((s) => (
                    <label
                      key={s.id}
                      className={
                        'book-option' + (service === s.id ? ' book-option--active' : '')
                      }
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s.id}
                        checked={service === s.id}
                        onChange={(e) => setService(e.target.value)}
                      />
                      <div>
                        <div className="book-option-label">{s.label}</div>
                        <div className="book-option-price">
                          {typeof s.price === 'number' ? `$${s.price}` : s.price}
                          <small> / {s.unit}</small>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="book-step">
              <div className="book-step-num">02</div>
              <div className="book-step-body">
                <h3>Pick a date &amp; time</h3>
                <div className="book-datetime">
                  <label className="field">
                    <span>Date</span>
                    <input
                      type="date"
                      value={date}
                      min={todayIso()}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </label>
                  <div className="field">
                    <span>Time slot</span>
                    <div className="slot-grid">
                      {SLOTS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={'slot' + (slot === s ? ' slot--active' : '')}
                          onClick={() => setSlot(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="book-step">
              <div className="book-step-num">03</div>
              <div className="book-step-body">
                <h3>Who's coming?</h3>
                <div className="book-counts">
                  <label className="counter">
                    <span>Children</span>
                    <div className="counter-controls">
                      <button type="button" onClick={() => setKids(Math.max(1, kids - 1))}>−</button>
                      <span>{kids}</span>
                      <button type="button" onClick={() => setKids(kids + 1)}>+</button>
                    </div>
                  </label>
                  <label className="counter">
                    <span>Adults</span>
                    <div className="counter-controls">
                      <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
                      <span>{adults}</span>
                      <button type="button" onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="book-step">
              <div className="book-step-num">04</div>
              <div className="book-step-body">
                <h3>Your details</h3>
                <div className="book-fields">
                  <label className="field">
                    <span>Full name</span>
                    <input type="text" placeholder="Jane Doe" required />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input type="email" placeholder="you@example.com" required />
                  </label>
                  <label className="field">
                    <span>Phone</span>
                    <input type="tel" placeholder="1 (868) 000-0000" required />
                  </label>
                  <label className="field">
                    <span>Notes (optional)</span>
                    <textarea rows="3" placeholder="Anything we should know?" />
                  </label>
                </div>
              </div>
            </div>
          </form>

          <aside className="book-summary">
            <div className="book-summary-head">
              <div className="home-eyebrow">Summary</div>
              <h3>Your booking</h3>
            </div>
            <dl className="book-summary-list">
              <div>
                <dt>Service</dt>
                <dd>{selected.label}</dd>
              </div>
              <div>
                <dt>Date</dt>
                <dd>{date}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{slot}</dd>
              </div>
              <div>
                <dt>Children</dt>
                <dd>{kids}</dd>
              </div>
              <div>
                <dt>Adults</dt>
                <dd>{adults}</dd>
              </div>
            </dl>
            <div className="book-summary-total">
              <span>Total</span>
              <strong>{total !== null ? `$${total}` : 'Quote on request'}</strong>
            </div>
            <button type="submit" form="" className="book-btn book-btn--wide" onClick={() => alert('Booking flow is a placeholder — connect to a real backend.')}>
              Confirm booking
            </button>
            <div className="book-summary-fine">
              You'll receive a confirmation email with payment instructions.
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
