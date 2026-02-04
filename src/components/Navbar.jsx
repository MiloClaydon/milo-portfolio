import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ChevronDown } from 'lucide-react';
import profilePic from '../assets/HomePagePhoto.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = {
    color: 'var(--retro-tan)',
    textDecoration: 'none',
    fontSize: '0.85rem', 
    fontFamily: 'var(--font-heading)',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',        // Make ALL links flex so they align with "Projects"
    alignItems: 'center',   // Vertically center text
    height: '100%'          // Fill the height
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',     // Starts right at the bottom of the nav item
    right: '0',
    backgroundColor: 'var(--retro-cream)',
    border: '3px solid var(--retro-burgundy)',
    padding: '10px 0', // Moved padding inside
    listStyle: 'none',
    minWidth: '240px',
    boxShadow: '4px 8px 0px rgba(0,0,0,0.2)',
    marginTop: '0px', // FIXED: Removed the 24px gap so it doesn't close on hover
    zIndex: 1001
  };

  const dropdownLinkStyle = {
    display: 'block',
    padding: '12px 20px',
    color: 'var(--retro-text)', // Dark text on cream background
    textDecoration: 'none',
    fontSize: '0.75rem',
    letterSpacing: '1px',
    fontFamily: 'var(--font-heading)',
    fontWeight: 'bold',
    borderBottom: '1px solid var(--retro-tan)',
    transition: 'all 0.2s',
    textTransform: 'uppercase',
  };

  return (
    <nav className="nav-retro">
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '70px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Logo/Badge */}
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'var(--retro-tan)',
          fontSize: '1.1rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'bold',
          border: '2px solid var(--retro-tan)',
          padding: '8px 16px',
          letterSpacing: '2px',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase'
        }}>
          MILO CLAYDON
        </Link>

        {/* Links */}
        <ul style={{ 
          display: 'flex', 
          gap: '35px', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0,
          alignItems: 'center',
          height: '100%' // Ensure ul fills height
        }}>
          <li><Link to="/" style={navLinkStyle}>HOME</Link></li>
          <li><Link to="/machining" style={navLinkStyle}>MANUFACTURING</Link></li>
          
          <li 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          >
            {/* Added padding top/bottom to this div to bridge any tiny gaps */}
            <div style={{ ...navLinkStyle, gap: '6px' }}>
              PROJECTS <ChevronDown size={16} strokeWidth={3} />
            </div>

            {isOpen && (
              <ul style={dropdownStyle}>
                {projects.map((project) => (
                  <li key={project.id}>
                    <Link to={`/project/${project.id}`} style={dropdownLinkStyle} onClick={() => setIsOpen(false)}>
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          <li><Link to="/contact" style={navLinkStyle}>CONTACT</Link></li>
        </ul>
      </div>
      <div className="nav-stripe"></div>
    </nav>
  );
}