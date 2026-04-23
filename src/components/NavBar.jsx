import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'HOME', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Parties', to: '/parties' },
  { label: 'Book Online', to: '/book' },
  { label: 'Sign Waiver', to: '/waiver' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'My Rewards', to: '/rewards' },
];

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <ul className="nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'nav-pill' + (isActive ? ' nav-pill--active' : '')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
