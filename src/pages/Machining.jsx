export default function Machining() {
  const machines = [
    { name: "Manual Lathe", level: "Expert" },
    { name: "3-Axis CNC Mill", level: "Advanced" },
    { name: "MIG/TIG Welding", level: "Intermediate" },
    { name: "Waterjet Cutting", level: "Proficient" }
  ];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <h1>Machining & Fabrication</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Hands-on experience is the core of my engineering philosophy. I don't just design in CAD; I manufacture the parts myself.
      </p>
      
      <div className="retro-stripes"></div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
        {machines.map((m, i) => (
          <div key={i} style={{ 
            backgroundColor: 'var(--retro-brown)', 
            color: 'var(--retro-tan)', 
            padding: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{m.name}</h3>
            <span style={{ 
              backgroundColor: 'var(--retro-orange)', 
              color: 'white', 
              padding: '2px 8px', 
              fontSize: '0.8rem' 
            }}>{m.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}