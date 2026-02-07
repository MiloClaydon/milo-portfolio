import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isVideoFile = (value) => /\.(mp4|webm|mov)(\?.*)?$/i.test(value || '');
  const isWinderVideo = (value) => /WinderVideo\.(mp4|webm|mov)(\?.*)?$/i.test(value || '');
  const isYouTubeUrl = (value) => /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)/i.test(value || '');
  const getYouTubeEmbedUrl = (value) => {
    if (!value) return '';
    const shortMatch = value.match(/youtu\.be\/([\w-]+)/i);
    if (shortMatch && shortMatch[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    const longMatch = value.match(/[?&]v=([^&]+)/i);
    if (longMatch && longMatch[1]) return `https://www.youtube.com/embed/${longMatch[1]}`;
    const embedMatch = value.match(/youtube\.com\/embed\/([^?&]+)/i);
    if (embedMatch && embedMatch[1]) return `https://www.youtube.com/embed/${embedMatch[1]}`;
    return value;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  const file = images[currentIndex];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container carousel-frame">
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={handlePrev}><ChevronLeft /></button>
            <button className="carousel-btn next" onClick={handleNext}><ChevronRight /></button>
          </>
        )}
        
        {isYouTubeUrl(file) ? (
          <iframe
            src={getYouTubeEmbedUrl(file)}
            title="Project media"
            className="carousel-slide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : isVideoFile(file) ? (
          <video src={file} controls className={`carousel-slide${isWinderVideo(file) ? ' no-crop' : ''}`} autoPlay loop muted playsInline />
        ) : (
          <img src={file} alt="Project media" className="carousel-slide" />
        )}
        <div className="hockey-stick-decorator"></div>
      </div>
      {images.length > 1 && (
        <p className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  if (!project) return <div className="container"><h2>Project not found</h2></div>;

  return (
    <div className="container project-detail">
      <Link to="/" className="project-back-link">
        <ChevronLeft size={18} /> RETURN TO MISSION CONTROL
      </Link>
      
      <h1 className="project-title">{project.title}</h1>

      {/* Steps Layout */}
      {project.layout === 'steps' && !isMobile && (
        <div className="project-steps">
          {project.steps.map((step, index) => (
            <div key={index} className="project-step-grid" style={{ gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr' }}>
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <h2 className="project-step-title">0{index + 1}. {step.title}</h2>
                <div className="retro-stripes-horizontal section-stripe-tight"></div>
                <p className="project-step-desc">{step.description}</p>
              </div>
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <ImageCarousel images={step.images} />
              </div>
            </div>
          ))}
        </div>
      )}

      {project.layout === 'steps' && isMobile && (
        <div className="project-steps mobile">
          {project.steps.map((step, index) => (
            <div key={index} className="project-step-stack">
              <div>
                <h2 className="project-step-title mobile">0{index + 1}. {step.title}</h2>
                <div className="retro-stripes-horizontal section-stripe-wide"></div>
              </div>
              <ImageCarousel images={step.images} />
              <p className="project-step-desc mobile">{step.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Single Layout */}
      {project.layout === 'single' && !isMobile && (
        <div className="project-single">
          <div>
            <p className="project-single-desc">{project.description}</p>
          </div>
          <div>
            {project.images && project.images.length > 0 && <ImageCarousel images={project.images} />}
          </div>
        </div>
      )}

      {project.layout === 'single' && isMobile && (
        <div className="project-single-stack">
          {project.images && project.images.length > 0 && <ImageCarousel images={project.images} />}
          <p className="project-single-desc mobile">{project.description}</p>
        </div>
      )}

      {/* NEW: Technical Spec Sheet Section */}
      {project.technicalSpecs && (
        <div className="project-specs">
          <h3 className="project-specs-title">
            ENGINEERING SPECIFICATIONS & CHALLENGES
          </h3>
          <ul className="project-specs-list">
            {project.technicalSpecs.map((spec, index) => (
              <li key={index} className="project-specs-item">
                <span className="project-specs-arrow">&#9658;</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PDF Viewer for Watch Project */}
      {project.pdfPath && (
        <div className="project-pdf">
          <h3 className="project-pdf-title">CERTIFIED TECHNICAL DRAWINGS</h3>
          <p className="project-pdf-intro">
            Production-ready engineering drawings conforming to ASME Y14.5-2018 Geometric Dimensioning and Tolerancing standards. All critical surfaces, datum references, and functional tolerances are fully defined for CNC manufacturing.
          </p>
          <div className="project-pdf-frame">
            <iframe src={`${project.pdfPath}#toolbar=0`} width="100%" height="100%" title="Technical Drawings" />
          </div>
        </div>
      )}
    </div>
  );
}