import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="topbar">
      <Link to="/" className="brand" aria-label="Sensory Safari home">
        <img src="/logo.png" alt="Sensory Safari" className="brand-logo-img" />
      </Link>

      <h1 className="hero-title">Welcome to the Gym for All Kids!</h1>
    </div>
  );
}
