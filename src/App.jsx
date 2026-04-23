import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UtilityBar from './components/UtilityBar.jsx';
import TopBar from './components/TopBar.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Parties from './pages/Parties.jsx';
import Book from './pages/Book.jsx';
import Waiver from './pages/Waiver.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Rewards from './pages/Rewards.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <UtilityBar />
        <header className="header">
          <TopBar />
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/book" element={<Book />} />
            <Route path="/waiver" element={<Waiver />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
