import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data Structure - Replace strings with your actual file paths
const manufacturingData = [
  {
    title: "Manual Machining",
    description: "There's something about the tactile feedback of a manual lathe that G-code can't replicate. I grew up on manual mills, focusing on the 'feel' of the cut and hitting tolerances the old-school way.",
    media: ["/assets/manual-1.jpg", "/assets/manual-2.mp4"]
  },
  {
    title: "CNC Machining",
    description: "When precision needs to meet repetition. I handle everything from CAM programming to fixture design, ensuring the spindles are running hot and the parts are coming out within microns.",
    media: ["/assets/cnc-1.jpg", "/assets/cnc-2.jpg"]
  },
  {
    title: "3D Printing & Prototyping",
    description: "Rapid iteration is the name of the game. I use FDM and Resin printing to test form, fit, and function before committing to metal, saving time and expensive material.",
    media: ["/assets/3d-1.jpg", "/assets/3d-2.jpg"]
  },
  {
    title: "Casting & Foundry",
    description: "Playing with molten metal. I've designed patterns and handled pours for aluminum and bronze, bridging the gap between digital design and ancient manufacturing techniques.",
    media: ["/assets/casting-1.jpg"]
  },
  {
    title: "Mechatronics",
    description: "This is where the machine gets a brain. I integrate sensors, microcontrollers, and custom PCBs to turn static mechanical assemblies into autonomous systems.",
    media: ["/assets/mech-1.jpg", "/assets/mech-2.jpg"]
  },
  {
    title: "Construction & Scale",
    description: "Sometimes the project doesn't fit on a workbench. From structural steel to heavy-duty timber builds, I apply engineering precision to large-scale environments.",
    media: ["/assets/const-1.jpg"]
  }
];

const ProcessSection = ({ section, index }) => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const isReverse = index % 2 !== 0;

  // Auto-scroll logic: 15 seconds
  useEffect(() => {
    if (section.media.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 15000);
    return () => clearInterval(timer);
  }, [currentMedia]);

  const handleNext = () => {
    setCurrentMedia((prev) => (prev + 1) % section.media.length);
  };

  const handlePrev = () => {
    setCurrentMedia((prev) => (prev - 1 + section.media.length) % section.media.length);
  };

  return (
    <section className={`process-section ${isReverse ? 'reverse' : ''}`}>
      <div className="process-text">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--retro-burgundy)', marginBottom: '1rem' }}>
          {section.title}
        </h2>
        <div className="retro-stripes-horizontal" style={{ height: '12px', width: '60%' }}></div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{section.description}</p>
      </div>

      <div className="carousel-container">
        {section.media.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={handlePrev}><ChevronLeft /></button>
            <button className="carousel-btn next" onClick={handleNext}><ChevronRight /></button>
          </>
        )}
        
        {section.media[currentMedia].endsWith('.mp4') ? (
          <video 
            src={section.media[currentMedia]} 
            className="carousel-slide" 
            autoPlay loop muted playsInline 
          />
        ) : (
          <img 
            src={section.media[currentMedia]} 
            alt={section.title} 
            className="carousel-slide" 
          />
        )}
        <div className="hockey-stick-decorator"></div>
      </div>
    </section>
  );
};

export default function Manufacturing() {
  return (
    <div className="container">
      <header style={{ padding: '60px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--retro-orange)' }}>Workshop Log</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          A look at the techniques I use to turn raw materials into functional machines. 
          Hardware is hard, but that's the fun part.
        </p>
      </header>

      {manufacturingData.map((section, index) => (
        <React.Fragment key={index}>
          <ProcessSection section={section} index={index} />
          {index !== manufacturingData.length - 1 && (
            <div className="retro-stripes-horizontal" style={{ opacity: 0.3 }}></div>
          )}
        </React.Fragment>
      ))}

      <footer style={{ padding: '80px 0', textAlign: 'center' }}>
        <a href="/contact" className="btn-retro">NEED SOMETHING MADE?</a>
      </footer>
    </div>
  );
}