import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return <div className="container"><h2>Project not found!</h2></div>;

  // Auto-transition every 15 seconds
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 15000);
    return () => clearInterval(timer);
  }, [currentImageIndex, project.images]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (project.images?.length || 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + (project.images?.length || 1)) % (project.images?.length || 1));
  };

  const images = project.images || [];

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--retro-orange)', fontWeight: 'bold' }}>&larr; BACK TO MISSION CONTROL</Link>
      
      <h1 style={{ fontSize: '3rem', marginTop: '20px', color: 'var(--retro-burgundy)' }}>{project.title}</h1>
      <div className="retro-stripes"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginTop: '40px' }}>
        {/* Left Column: Story & Images */}
        <div>
          {/* Carousel */}
          <div className="carousel-container">
            {images.length > 1 && (
              <>
                <button className="carousel-btn prev" onClick={handlePrev}><ChevronLeft /></button>
                <button className="carousel-btn next" onClick={handleNext}><ChevronRight /></button>
              </>
            )}
            
            {images.length > 0 ? (
              images[currentImageIndex].endsWith('.mp4') ? (
                <video 
                  src={images[currentImageIndex]} 
                  className="carousel-slide" 
                  autoPlay loop muted playsInline 
                />
              ) : (
                <img 
                  src={images[currentImageIndex]} 
                  alt={project.title} 
                  className="carousel-slide" 
                />
              )
            ) : (
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
            )}
            
            <div className="hockey-stick-decorator"></div>
          </div>
          
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
    </div>
  );
}