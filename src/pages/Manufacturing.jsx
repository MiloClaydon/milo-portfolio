import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import media assets
import WatchMilling1 from '../assets/WatchMilling1.jpg';
import WatchMilling2 from '../assets/Watchmilling2.jpg';
import CNCMilling1 from '../assets/CNCMilling1.mp4';
import CNCMilling2 from '../assets/CNCMilling2.mp4';
import CNCMilling3 from '../assets/CNCMilling3.mp4';
import CNCParts1 from '../assets/CNCParts1.jpg';
import CNCParts2 from '../assets/CNCParts2.jpg';
import CNCParts3 from '../assets/CNCParts3.jpg';
import cncmillingmachine from '../assets/cncmillingmachine.jpg';
import _3DPrinterBefore1 from '../assets/3DPrinterBefore1.jpg';
import _3DPrinterBefore2 from '../assets/3DPrinterBefore2.jpg';
import _3dprintedgridfinity from '../assets/3dprintedgridfinity.jpg';
import _3DPrintedPerson from '../assets/3DPrintedPerson(forsurgicalinstrumenttesting).jpg';
import Modix1 from '../assets/Modix1.mp4';
import Voron1 from '../assets/Voron1.mp4';
import Voron2 from '../assets/Voron2.jpg';
import ClaydonBuilding from '../assets/ClaydonBuilding.jpg';
import BuildingWithGrandpa from '../assets/BuildingWithGrandpa.jpg';
import Winder1 from '../assets/Winder1.mp4';
import Winder2 from '../assets/Winder2.jpg';
import WinderVideo from '../assets/WinderVideo.mp4';
import WeldedFoot1 from '../assets/WeldedFoot1(forWinder).jpg';
import buildingfilamentwinder from '../assets/buildingfilamentwinder.jpg';
import Wheel1 from '../assets/Wheel1.jpg';
import Casting from '../assets/Casting.jfif';

// Data Structure with actual assets and project references
const manufacturingData = [
  {
    title: "Manual Machining",
    description: "Whenever a project allows it I prefer using manual machines. The tactile feedback takes the trial and error out of finding the right speeds and feeds. My first time on a manual mill and lathe was in my MIAE 312 class, I went on to be the teaching assistant for that class for the nest 2 years of my degree.",
    media: [CNCParts3],
    projects: ["Precision Wristwatch"]
  },
  {
    title: "CNC Machining",
    description: "Sometimes manual machining doesn't cut it. For high volume production or complex geometries, CNC machining is the way to go. I've programmed and operated 3-axis mills and lathes, learning to optimize toolpaths for efficiency while maintaining tight tolerances. I worked with the concordia formula racing team, Baja team, space concordia, and a bunch of different research programs machining things from rocket parts to plastic injection molds",
    media: [CNCParts1, CNCParts2, cncmillingmachine, CNCMilling1, CNCMilling2, CNCMilling3,WatchMilling1,WatchMilling2],
    projects: ["Precision Wristwatch"]
  },
  {
    title: "3D Printing & Prototyping",
    description: "Rapid iteration is the name of the game. I use FDM and Resin printing to test form, fit, and function before committing to metal, saving time and expensive material.",
    media: [_3DPrinterBefore1, _3DPrinterBefore2, _3dprintedgridfinity, _3DPrintedPerson, Voron1, Voron2, Modix1],
    projects: ["Custom 3D Printers"]
  },
  {
    title: "Casting & Foundry",
    description: "I've also done a good amount of metal casting. Mostly with aluminum and bronze, but this is a skill I'd like to develope further. Particularly incorporating resin 3D prints for lost resin castings",
    media: [Casting],
    projects: ["Backyard Metallurgy"]
  },
  {
    title: "Welding & Fabrication",
    description: "Though they aren't always the prettiest welds. I've used MIG, TIG, and Stick welding to make my steel fabrication projects come to life. From building a filament winder from scratch to restoring an old pottery wheel, welding has been an essential skill in my manufacturing toolkit.",
    media: [buildingfilamentwinder, WeldedFoot1],
    projects: ["Carbon Fiber Winder"]
  },
  {
    title: "Automation & Mechatronics",
    description: "This is possibly one of my favorite areas of manufacturing. I originally wanted to be a mechatronics engineer before I discovered my love for machining. Integrating mechanical systems with electronics and control systems to create automated solutions is fascinating. I've designed and built automated filament winders and CNC modifications for 3D printers, blending my skills in machining, electronics, and programming.",
    media: [Winder1, WinderVideo, Wheel1],
    projects: ["Carbon Fiber Winder", "Upcycled Pottery Wheel"]
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
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
      {/* Text content */}
      <div style={{ order: isReverse ? 2 : 1 }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--retro-burgundy)', marginBottom: '1rem' }}>
          {section.title}
        </h2>
        <div className="retro-stripes-horizontal" style={{ height: '12px', width: '60%', marginBottom: '1.5rem' }}></div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>{section.description}</p>
        
        {section.projects && section.projects.length > 0 && (
          <div style={{ backgroundColor: 'var(--retro-tan)', padding: '15px 20px', border: '3px solid var(--retro-burgundy)', marginTop: '1.5rem' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', color: 'var(--retro-burgundy)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Used in:
            </p>
            <ul style={{ margin: '0', paddingLeft: '20px', listStyle: 'disc' }}>
              {section.projects.map((project, i) => (
                <li key={i} style={{ color: 'var(--retro-burgundy)', fontWeight: '600', fontSize: '0.95rem' }}>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Media carousel */}
      <div style={{ order: isReverse ? 1 : 2 }}>
        <div className="carousel-container">
          {section.media.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={handlePrev}><ChevronLeft /></button>
              <button className="carousel-btn next" onClick={handleNext}><ChevronRight /></button>
            </>
          )}
          
          {typeof section.media[currentMedia] === 'string' && section.media[currentMedia].endsWith('.mp4') ? (
            <video 
              src={section.media[currentMedia]} 
              className={`carousel-slide${section.media[currentMedia].includes('WinderVideo') ? ' no-crop' : ''}`}
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
        <a href="/contact" className="btn-retro">REACH OUT</a>
      </footer>
    </div>
  );
}