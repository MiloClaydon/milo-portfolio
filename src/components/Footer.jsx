export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--retro-brown)', 
      color: 'var(--retro-tan)', 
      padding: '40px 0', 
      marginTop: '60px',
      textAlign: 'center'
    }}>
      <div className="container">
        <h3>Milo Claydon Engineering</h3>
        <p>Montreal, Canada | 819-431-8894</p>
        <p>miloclaydon@hotmail.com</p>
        <div style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.7 }}>
          © 2026 Built with React & Retro Vibes
        </div>
      </div>
    </footer>
  );
}