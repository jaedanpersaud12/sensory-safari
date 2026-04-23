import { useState } from 'react';

const ACKNOWLEDGEMENTS = [
  'I understand that play at Sensory Safari involves physical activity and inherent risks.',
  'I confirm my child(ren) and I will wear grip socks in the play area at all times.',
  'I agree to supervise my child(ren) throughout the visit.',
  'I release Sensory Safari TT from liability for injuries sustained during normal play.',
  'I consent to emergency medical care being administered if required.',
];

export default function Waiver() {
  const [checks, setChecks] = useState(() => ACKNOWLEDGEMENTS.map(() => false));
  const allChecked = checks.every(Boolean);

  return (
    <div className="waiver-page">
      <section className="page-hero page-hero--cream">
        <div className="page-hero-inner page-hero-inner--centered">
          <div className="page-hero-copy">
            <div className="home-eyebrow">Liability waiver</div>
            <h1>Sign once. Play anytime.</h1>
            <p>
              A quick digital waiver keeps our front desk quick and your kids
              on the trampoline faster. Takes under two minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="waiver-section">
        <form
          className="waiver-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Waiver submission is a placeholder — connect to a real backend.');
          }}
        >
          <div className="waiver-card">
            <h3>Guardian details</h3>
            <div className="book-fields">
              <label className="field">
                <span>Full legal name</span>
                <input type="text" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" required />
              </label>
              <label className="field">
                <span>Phone</span>
                <input type="tel" required />
              </label>
              <label className="field">
                <span>Emergency contact</span>
                <input type="text" placeholder="Name & phone" required />
              </label>
            </div>
          </div>

          <div className="waiver-card">
            <h3>Child(ren)</h3>
            <div className="book-fields">
              <label className="field">
                <span>Child's name</span>
                <input type="text" required />
              </label>
              <label className="field">
                <span>Date of birth</span>
                <input type="date" required />
              </label>
              <label className="field waiver-field-full">
                <span>Any allergies, medical conditions, or sensitivities we should know about</span>
                <textarea rows="3" />
              </label>
            </div>
            <button type="button" className="text-link waiver-add">
              + Add another child
            </button>
          </div>

          <div className="waiver-card">
            <h3>Acknowledgements</h3>
            <ul className="waiver-acks">
              {ACKNOWLEDGEMENTS.map((text, i) => (
                <li key={i}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checks[i]}
                      onChange={() => {
                        const next = [...checks];
                        next[i] = !next[i];
                        setChecks(next);
                      }}
                    />
                    <span>{text}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="waiver-card">
            <h3>Digital signature</h3>
            <div className="waiver-sign">
              <div className="waiver-sign-pad" aria-label="Signature pad placeholder">
                <span>Sign here</span>
              </div>
              <label className="field">
                <span>Type your full name as signature</span>
                <input type="text" placeholder="Jane Doe" required />
              </label>
              <label className="field">
                <span>Date</span>
                <input type="date" required />
              </label>
            </div>
          </div>

          <div className="waiver-submit">
            <button
              type="submit"
              className="book-btn book-btn--wide"
              disabled={!allChecked}
            >
              Submit waiver
            </button>
            {!allChecked && (
              <span className="waiver-hint">
                Please acknowledge each item to continue.
              </span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
