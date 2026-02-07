import { Linkedin } from 'lucide-react';
import Logo from '../../assets/Logo.png';

export default function Footer() {
  const stripes = [
    { color: 'var(--retro-blue)', yLow: 20, yHigh: 0 },
    { color: 'var(--retro-burgundy)', yLow: 30, yHigh: 10 },
    { color: 'var(--retro-orange)', yLow: 40, yHigh: 20 },
    { color: 'var(--retro-yellow)', yLow: 50, yHigh: 30 },
    { color: 'var(--retro-tan)', yLow: 60, yHigh: 40 }
  ];

  return (
    <footer className="footer">
      {/* Top decorative stripe */}
      <div className="footer-stripe">
        <svg width="100%" height="60" preserveAspectRatio="none" viewBox="0 0 1000 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {stripes.map((stripe, i) => (
            <path
              key={i}
              d={`M0 ${stripe.yLow} L250 ${stripe.yLow} L350 ${stripe.yHigh} L1000 ${stripe.yHigh}`}
              stroke={stripe.color}
              strokeWidth="12"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      {/* Main footer content */}
      <div className="container footer-content">
        <img src={Logo} alt="Milo Claydon logo" className="footer-logo" />
        <h3 className="footer-title">Milo Claydon Engineering</h3>

        <div className="footer-divider"></div>

        <p className="footer-contact">Montreal, Canada | 819-431-8894</p>

        <a href="mailto:miloclaydon@hotmail.com" className="footer-email">
          miloclaydon@hotmail.com
        </a>

        {/* LinkedIn Button */}
        <div className="footer-linkedin-wrap">
          <a
            href="https://ca.linkedin.com/in/miloclaydonengineering"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-linkedin"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom decorative stripe */}
      <div className="footer-stripe bottom">
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 1000 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {stripes.map((stripe, i) => (
            <path
              key={i}
              d={`M0 ${stripe.yHigh + 10} L300 ${stripe.yHigh + 10} L250 ${stripe.yLow - 10} L1000 ${stripe.yLow - 10}`}
              stroke={stripe.color}
              strokeWidth="10"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      {/* Copyright line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Milo Claydon. Engineered with precision and passion.
      </div>
    </footer>
  );
}
