/import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav 
      style={{
        padding: '10px',
        background: '#333',
        color: 'white',
        display: 'flex',           // Flexbox layout
        justifyContent: 'center',  // Center items horizontally
        alignItems: 'center'       // Align items vertically in the center
      }}
    >
      <ul 
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '15px',
          margin: 0,  // Remove default margin
          padding: 0   // Remove default padding
        }}
      >
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
