import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--retro-brown)', 
      color: 'var(--retro-orange)', 
      padding: '40px 0', 
      marginTop: '60px',
      textAlign: 'center'
    }}>
      <div className="container">
        <h3 style={{ color: 'var(--retro-orange)', marginBottom: '10px' }}>Milo Claydon Engineering</h3>
        <p style={{ color: 'var(--retro-blue)', fontSize: '1.1rem', margin: '8px 0' }}>Montreal, Canada | 819-431-8894</p>
        <p style={{ color: 'var(--retro-tan)', margin: '8px 0' }}>miloclaydon@hotmail.com</p>
        <div style={{ marginTop: '30px' }}>
          <a 
            href="https://www.linkedin.com/in/miloclaydon" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--retro-blue)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--retro-orange)';
              e.currentTarget.style.textShadow = '0 0 8px rgba(211, 84, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--retro-blue)';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}