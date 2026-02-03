export default function Contact() {
  return (
    <div className="container" style={{ padding: '40px 0', maxWidth: '600px' }}>
      <h1 style={{ textAlign: 'center' }}>Establish Comms</h1>
      <div className="retro-stripes"></div>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        border: '2px solid var(--retro-brown)',
        boxShadow: '10px 10px 0 var(--retro-yellow)'
      }}>
        <p><strong>Email:</strong> miloclaydon@hotmail.com</p>
        <p><strong>Phone:</strong> 819-431-8894</p>
        <p><strong>Location:</strong> Montreal, Canada</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          <label>
            <strong>Name:</strong>
            <input type="text" style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }} />
          </label>
          <label>
            <strong>Message:</strong>
            <textarea rows="5" style={{ width: '100%', padding: '10px', marginTop: '5px', border: '1px solid #ccc' }}></textarea>
          </label>
          <button type="button" className="btn-retro">TRANSMIT MESSAGE</button>
        </form>
      </div>
    </div>
  );
}