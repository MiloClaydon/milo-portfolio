import { Linkedin } from 'lucide-react';

export default function Footer() {
  const stripes = [
    { color: 'var(--retro-blue)', yLow: 20, yHigh: 0 },
    { color: 'var(--retro-burgundy)', yLow: 30, yHigh: 10 },
    { color: 'var(--retro-orange)', yLow: 40, yHigh: 20 },
    { color: 'var(--retro-yellow)', yLow: 50, yHigh: 30 },
    { color: 'var(--retro-tan)', yLow: 60, yHigh: 40 }
  ];

  return (
    <footer style={{ 
      backgroundColor: 'var(--retro-tan)', 
      color: 'var(--retro-text)', 
      marginTop: '80px',
      position: 'relative',
      borderTop: '6px solid var(--retro-burgundy)'
    }}>
      {/* Top decorative stripe */}
      <div style={{ position: 'relative', height: '60px', backgroundColor: 'var(--retro-burgundy)', overflow: 'hidden' }}>
        <svg width="100%" height="60" preserveAspectRatio="none" viewBox="0 0 1000 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
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
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h3 style={{ 
          color: 'var(--retro-burgundy)', 
          marginBottom: '5px',
          fontSize: '2rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>Milo Claydon Engineering</h3>
        
        <div style={{ 
          width: '120px', 
          height: '8px', 
          background: 'linear-gradient(to right, var(--retro-blue), var(--retro-burgundy), var(--retro-orange), var(--retro-yellow))',
          margin: '15px auto 25px',
          borderRadius: '2px'
        }}></div>

        <p style={{ 
          color: 'var(--retro-burgundy)', 
          fontSize: '1.1rem', 
          margin: '12px 0',
          fontWeight: '500'
        }}>Montreal, Canada | 819-431-8894</p>
        
        <p style={{ 
          color: 'var(--retro-blue)', 
          margin: '12px 0',
          fontSize: '0.95rem'
        }}>miloclaydon@hotmail.com</p>

        {/* LinkedIn Button */}
        <div style={{ marginTop: '35px' }}>
          <a 
            href="https://ca.linkedin.com/in/miloclaydonengineering"
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--retro-tan)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              backgroundColor: 'var(--retro-burgundy)',
              border: '3px solid var(--retro-orange)',
              padding: '12px 28px',
              boxShadow: '4px 4px 0px var(--retro-yellow)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--retro-orange)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = '6px 6px 0px var(--retro-burgundy)';
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--retro-burgundy)';
              e.currentTarget.style.color = 'var(--retro-tan)';
              e.currentTarget.style.boxShadow = '4px 4px 0px var(--retro-yellow)';
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom decorative stripe */}
      <div style={{ position: 'relative', height: '50px', backgroundColor: 'var(--retro-burgundy)', overflow: 'hidden' }}>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 1000 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
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
      <div style={{ 
        backgroundColor: 'var(--retro-tan)',
        padding: '15px 20px',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: 'var(--retro-burgundy)',
        borderTop: '3px solid var(--retro-burgundy)',
        fontStyle: 'italic'
      }}>
        © {new Date().getFullYear()} Milo Claydon. Engineered with precision and passion.
      </div>
    </footer>
  );
}