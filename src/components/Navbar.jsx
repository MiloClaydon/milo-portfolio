import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Match the logo box: burgundy background, tan border, orange shadow
  const navLinkStyle = {
    color: 'var(--retro-tan)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 900,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 20px',
    backgroundColor: 'var(--retro-burgundy)',
    border: '3px solid var(--retro-tan)',
    boxShadow: '4px 4px 0px var(--retro-orange)',
    transition: 'all 0.15s ease',
    zIndex: 11
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: '0',
    left: 'auto',
    backgroundColor: 'var(--retro-cream)',
    border: '3px solid var(--retro-burgundy)',
    padding: '15px',
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    boxShadow: '4px 8px 0px rgba(0,0,0,0.2)',
    zIndex: 1001,
    marginTop: '8px',
    minWidth: '600px'
  };

  const stripes = [
    { color: 'var(--retro-blue)', yLow: 37, yHigh: 7 },
    { color: 'var(--retro-burgundy)', yLow: 49, yHigh: 19 },
    { color: 'var(--retro-orange)', yLow: 61, yHigh: 31 },
    { color: 'var(--retro-yellow)', yLow: 73, yHigh: 43 },
    { color: 'var(--retro-tan)', yLow: 85, yHigh: 55 }
  ];

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsOpen(true);
  };

  return (
    <nav style={{ backgroundColor: 'var(--retro-burgundy)', position: 'sticky', top: 0, zIndex: 1000, height: '100px' }}>
      
      {/* Decorative SVG stripes (pointer-events none so links are clickable) */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
        <svg width="100%" height="100" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {stripes.map((stripe, i) => (
            <path 
              key={i}
              d={`M0 ${stripe.yLow} L380 ${stripe.yLow} L420 ${stripe.yHigh} L1000 ${stripe.yHigh}`} 
              stroke={stripe.color} 
              strokeWidth="18" 
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative', zIndex: 10 }}>
        
        {/* Logo */}
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'var(--retro-tan)',
          fontSize: '1.2rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          border: '3px solid var(--retro-tan)',
          padding: '8px 20px',
          backgroundColor: 'var(--retro-burgundy)',
          boxShadow: '4px 4px 0px var(--retro-orange)',
          zIndex: 11
        }}>
          MILO CLAYDON
        </Link>

        {/* Links with same boxed style as logo */}
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', margin: 0, padding: 0, height: '100%', alignItems: 'center' }}>
          <li>
            <Link to="/" style={navLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-orange)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(90,31,31,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-burgundy)';
                e.currentTarget.style.color = 'var(--retro-tan)';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--retro-orange)';
              }}>
              HOME
            </Link>
          </li>
          
          <li>
            <Link to="/machining" style={navLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-orange)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(90,31,31,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-burgundy)';
                e.currentTarget.style.color = 'var(--retro-tan)';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--retro-orange)';
              }}>
              MANUFACTURING
            </Link>
          </li>
          
          <li 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}>
            <div style={{ ...navLinkStyle, cursor: 'pointer', gap: '8px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-orange)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(90,31,31,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-burgundy)';
                e.currentTarget.style.color = 'var(--retro-tan)';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--retro-orange)';
              }}>
              PROJECTS <ChevronDown size={14} />
            </div>
            {isOpen && (
              <ul 
                style={dropdownStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {projects.map((p) => (
                  <li key={p.id}>
                    <Link to={`/project/${p.id}`} 
                      style={{ 
                        display: 'block', 
                        padding: '12px 15px', 
                        color: 'var(--retro-burgundy)', 
                        textDecoration: 'none', 
                        fontWeight: 'bold', 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: '0.9rem', 
                        transition: 'background-color 0.15s',
                        border: '2px solid var(--retro-burgundy)',
                        backgroundColor: 'var(--retro-tan)',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--retro-orange)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--retro-tan)'}
                      onClick={() => setIsOpen(false)}>
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" style={navLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-orange)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '6px 6px 0px rgba(90,31,31,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--retro-burgundy)';
                e.currentTarget.style.color = 'var(--retro-tan)';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--retro-orange)';
              }}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}