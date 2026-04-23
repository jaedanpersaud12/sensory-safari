import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const CATEGORIES = ['All', 'Play zones', 'Parties', 'The space', 'Events'];

const PHOTOS = [
  { label: 'Zipline in action', category: 'Play zones', aspect: '4 / 5' },
  { label: 'Trampoline zone', category: 'Play zones', aspect: '1 / 1' },
  { label: 'Climber structure', category: 'Play zones', aspect: '3 / 4' },
  { label: 'Snoezelen calming room', category: 'The space', aspect: '4 / 3' },
  { label: 'Arts & crafts corner', category: 'The space', aspect: '1 / 1' },
  { label: 'Birthday setup', category: 'Parties', aspect: '4 / 5' },
  { label: 'Cake & candles', category: 'Parties', aspect: '1 / 1' },
  { label: 'Swings', category: 'Play zones', aspect: '3 / 4' },
  { label: 'Basketball area', category: 'Play zones', aspect: '4 / 3' },
  { label: 'Grand opening', category: 'Events', aspect: '4 / 5' },
  { label: 'Dress-up costumes', category: 'The space', aspect: '1 / 1' },
  { label: 'Lobby & café', category: 'The space', aspect: '3 / 4' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <div className="gallery-page">
      <section className="page-hero page-hero--cream">
        <div className="page-hero-inner page-hero-inner--centered">
          <div className="page-hero-copy">
            <div className="home-eyebrow">Gallery</div>
            <h1>Moments from the Safari.</h1>
            <p>Climbs, cakes, quiet wins, and the occasional happy mess.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-filter-row">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={'filter-chip' + (active === c ? ' filter-chip--active' : '')}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((p, i) => (
            <div key={`${p.label}-${i}`} className="gallery-item" style={{ gridRow: `span ${p.aspect === '1 / 1' ? 1 : 2}` }}>
              <ImagePlaceholder
                label={p.label}
                aspect={p.aspect}
                rounded={16}
                tone={i % 3 === 0 ? 'orange' : i % 3 === 1 ? 'turquoise' : 'cream'}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="gallery-empty">
            No photos in this category yet — check back soon.
          </div>
        )}
      </section>
    </div>
  );
}
