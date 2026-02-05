import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const PDFViewer = ({ pdfPath }) => {
  return (
    <div style={{ marginBottom: '80px' }}>
      <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--retro-orange)', marginBottom: '20px' }}>
        TECHNICAL BLUEPRINTS
      </h3>
      <div style={{
        border: '10px solid var(--retro-burgundy)',
        boxShadow: '12px 12px 0px var(--retro-yellow)',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <iframe
          src={pdfPath}
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '4px'
          }}
          title="Technical Blueprints"
        />
      </div>
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [images]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (images?.length || 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + (images?.length || 1)) % (images?.length || 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="carousel-container">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          color: '#999',
          fontSize: '1.1rem'
        }}>
          [Image Gallery Coming Soon]
        </div>
        <div className="hockey-stick-decorator"></div>
      </div>
    );
  }

  return (
    <div className="carousel-container">
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={handlePrev}><ChevronLeft /></button>
          <button className="carousel-btn next" onClick={handleNext}><ChevronRight /></button>
        </>
      )}
      
      {images[currentImageIndex]?.endsWith?.('.mp4') ? (
        <video 
          src={images[currentImageIndex]} 
          className="carousel-slide" 
          autoPlay loop muted playsInline 
        />
      ) : (
        <img 
          src={images[currentImageIndex]} 
          alt="Project media" 
          className="carousel-slide" 
        />
      )}
      
      <div className="hockey-stick-decorator"></div>
    </div>
  );
};

// Single Layout Component
const SingleLayout = ({ project }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginTop: '40px' }}>
    {/* Left Column: Story & Images */}
    <div>
      <ImageCarousel images={project.images} />
      
      <h3 style={{ marginTop: '30px' }}>Project Brief</h3>
      <p style={{ fontSize: '1.1rem' }}>{project.description}</p>
      
      <h3>Engineering Challenges</h3>
      <p>{project.challenges || 'Detailed challenges coming soon...'}</p>
    </div>

    {/* Right Column: Specs */}
    <div style={{ backgroundColor: 'white', padding: '20px', border: '2px solid var(--retro-brown)', height: 'fit-content' }}>
      <h3 style={{ marginTop: 0, color: 'var(--retro-orange)' }}>Mission Data</h3>
      <p><strong>Year:</strong> {project.year}</p>
      <p><strong>Category:</strong> {project.category}</p>
      <hr style={{ border: '1px dashed var(--retro-brown)' }}/>
      <h4>Tech Stack:</h4>
      <ul style={{ paddingLeft: '20px' }}>
        {project.tech.map(t => <li key={t}>{t}</li>)}
      </ul>
      <hr style={{ border: '1px dashed var(--retro-brown)' }}/>
      <button className="btn-retro" style={{ width: '100%' }}>DOWNLOAD CAD FILES</button>
    </div>
  </div>
);

// Steps Layout Component
const StepsLayout = ({ project }) => {
  const isWinder = project.id === 'filament-winder';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginTop: '40px' }}>
      {/* Display only first step */}
      {project.steps && project.steps[0] && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          <div>
            <h2 style={{ fontSize: '2rem', borderBottom: '4px solid var(--retro-orange)', display: 'inline-block', color: 'var(--retro-burgundy)' }}>
              01. {project.steps[0].title}
            </h2>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>{project.steps[0].description}</p>
          </div>
          <div>
            {project.steps[0].showPDF && project.pdfPath ? (
              <PDFViewer pdfPath={project.pdfPath} />
            ) : (
              <ImageCarousel images={project.steps[0].images} />
            )}
          </div>
        </div>
      )}

      {/* Display remaining steps */}
      {project.steps?.slice(1).map((step, index) => (
        <div key={index + 1} style={{ 
          display: 'grid', 
          gridTemplateColumns: (index + 1) % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          <div style={{ order: (index + 1) % 2 === 0 ? 1 : 2 }}>
            <h2 style={{ fontSize: '2rem', borderBottom: '4px solid var(--retro-orange)', display: 'inline-block', color: 'var(--retro-burgundy)' }}>
              0{index + 2}. {step.title}
            </h2>
            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>{step.description}</p>
          </div>
          <div style={{ order: (index + 1) % 2 === 0 ? 2 : 1 }}>
            <ImageCarousel images={step.images} />
          </div>
        </div>
      ))}

      {/* Special winder video at bottom */}
      {isWinder && (
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '2rem', borderBottom: '4px solid var(--retro-orange)', display: 'inline-block', color: 'var(--retro-burgundy)', marginBottom: '30px' }}>
            Full System in Action
          </h2>
          <div style={{
            border: '10px solid var(--retro-burgundy)',
            boxShadow: '12px 12px 0px var(--retro-yellow)',
            overflow: 'hidden',
            aspectRatio: '16/9'
          }}>
            <video 
              src={project.steps[2]?.images?.[0]} 
              className="carousel-slide"
              controls
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="container"><h2>Project not found</h2></div>;

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <Link to="/" style={{ color: 'var(--retro-orange)', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>
        &larr; RETURN TO MISSION CONTROL
      </Link>
      
      <h1 style={{ fontSize: '3.5rem', margin: '20px 0', color: 'var(--retro-burgundy)' }}>{project.title}</h1>
      <div className="retro-stripes-horizontal"></div>

      {project.layout === 'steps' ? (
        <StepsLayout project={project} />
      ) : (
        <SingleLayout project={project} />
      )}
    </div>
  );
}