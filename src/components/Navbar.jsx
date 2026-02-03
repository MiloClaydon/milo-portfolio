import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-glass" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '70px' 
      }}>
        {/* Logo/Badge */}
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'var(--text-main)', 
          fontSize: '0.9rem',
          border: '1px solid var(--text-main)',
          padding: '4px 12px'
        }}>
          MILO CLAYDON
        </Link>

        {/* Links */}
        <ul style={{ 
          display: 'flex', 
          gap: '40px', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0,
          alignItems: 'center'
        }}>
          <li><Link to="/" className="nav-item" style={navLinkStyle}>HOME</Link></li>
          <li><Link to="/machining" className="nav-item" style={navLinkStyle}>MANUFACTURING</Link></li>
          
          <li 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
            style={{ position: 'relative' }}
          >
            <div className="nav-item" style={{ ...navLinkStyle, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              PROJECTS <ChevronDown size={12} />
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
          
          <li><Link to="/contact" className="nav-item" style={navLinkStyle}>CONTACT</Link></li>
        </ul>
      </div>
      {/* The 80s Gradient Stripe at the bottom of the nav */}
      <div className="nav-stripe"></div>
    </nav>
  );
}

const navLinkStyle = {
  color: '#666',
  textDecoration: 'none',
  fontSize: '0.65rem',
  transition: 'all 0.3s ease'
};

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  right: '0', /* Prevents horizontal scroll */
  backgroundColor: '#fff',
  border: '1px solid var(--chrome-line)',
  padding: '10px 0',
  listStyle: 'none',
  minWidth: '220px',
  boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
  marginTop: '10px'
};

const dropdownLinkStyle = {
  display: 'block',
  padding: '10px 20px',
  color: '#444',
  textDecoration: 'none',
  fontSize: '0.7rem',
  letterSpacing: '1px',
  borderBottom: '1px solid #f9f9f9',
  transition: 'background 0.2s'
};