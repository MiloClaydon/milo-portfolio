import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-retro" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
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
          fontSize: '0.95rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'bold',
          border: '2px solid var(--retro-tan)',
          padding: '6px 14px',
          letterSpacing: '2px',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'var(--retro-orange)';
          e.target.style.color = 'white';
          e.target.style.borderColor = 'var(--retro-orange)';
          e.target.style.boxShadow = '0 0 12px rgba(211, 84, 0, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'var(--retro-tan)';
          e.target.style.borderColor = 'var(--retro-tan)';
          e.target.style.boxShadow = 'none';
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
          alignItems: 'center'
        }}>
          <li><Link to="/" className="nav-retro-item" style={navLinkStyle}>HOME</Link></li>
          <li><Link to="/machining" className="nav-retro-item" style={navLinkStyle}>MANUFACTURING</Link></li>
          
          <li 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
            style={{ position: 'relative' }}
          >
            <div className="nav-retro-item" style={{ ...navLinkStyle, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              PROJECTS <ChevronDown size={14} strokeWidth={3} />
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
          
          <li><Link to="/contact" className="nav-retro-item" style={navLinkStyle}>CONTACT</Link></li>
        </ul>
      </div>
      {/* The 80s Geometric Stripe at the bottom of the nav */}
      <div className="nav-stripe"></div>
    </nav>
  );
}

const navLinkStyle = {
  color: 'var(--retro-tan)',
  textDecoration: 'none',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-heading)',
  fontWeight: 'bold',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  position: 'relative',
  cursor: 'pointer',
  paddingBottom: '4px',
  borderBottom: '2px solid transparent'
};

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  right: '0',
  backgroundColor: 'var(--retro-cream)',
  border: '3px solid var(--retro-blue)',
  padding: '0',
  listStyle: 'none',
  minWidth: '240px',
  boxShadow: '4px 8px 0px rgba(0,0,0,0.15)',
  marginTop: '24px',
  zIndex: 1001
};

const dropdownLinkStyle = {
  display: 'block',
  padding: '12px 18px',
  color: 'var(--retro-brown)',
  textDecoration: 'none',
  fontSize: '0.75rem',
  letterSpacing: '1px',
  fontFamily: 'var(--font-heading)',
  fontWeight: 'bold',
  borderBottom: '1px solid var(--retro-tan)',
  transition: 'all 0.2s',
  textTransform: 'uppercase',
  backgroundColor: 'transparent'
};