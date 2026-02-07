import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

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

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) {
      setIsOpen(false);
    }
  };

  const handleToggleProjects = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* Decorative SVG stripes (pointer-events none so links are clickable) */}
      <div className="nav-stripes">
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

      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-brand">
          MCE
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Links with same boxed style as logo */}
        <ul className={`nav-links${isMenuOpen ? ' open' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
          </li>

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="nav-item"
          >
            <div className="nav-link dropdown" onClick={handleToggleProjects}>
              PROJECTS <ChevronDown size={14} />
            </div>
            {isOpen && (
              <ul className="nav-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {projects.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/project/${p.id}`}
                      className="nav-dropdown-link"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/machining" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              MANUFACTURING
            </Link>
          </li>

          <li>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
