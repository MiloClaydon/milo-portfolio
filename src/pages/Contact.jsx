export default function Contact() {
  return (
    <div className="container contact-page">
      <h1 className="contact-title">Establish Comms</h1>
      <div className="retro-stripes-horizontal"></div>
      
      <div className="contact-card">
        <p><strong>Email:</strong> miloclaydon@hotmail.com</p>
        <p><strong>Phone:</strong> 819-431-8894</p>
        <p><strong>Location:</strong> Montreal, Canada</p>
        
        <form className="contact-form">
          <label>
            <strong>Name:</strong>
            <input type="text" className="contact-input" />
          </label>
          <label>
            <strong>Message:</strong>
            <textarea rows="5" className="contact-textarea"></textarea>
          </label>
          <button type="button" className="btn-retro">TRANSMIT MESSAGE</button>
        </form>
      </div>
    </div>
  );
}