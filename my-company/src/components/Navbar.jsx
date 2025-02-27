// src/components/Navbar.jsx

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <nav>
        <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
        <Link to="/services" style={{ color: 'white', margin: '0 10px' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
