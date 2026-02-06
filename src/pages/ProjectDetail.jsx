import React, { useState } from 'react';
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
    <div style={{ position: 'relative' }}>
      <div className="carousel-container" style={{
        background: 'linear-gradient(to bottom, var(--retro-blue) 0% 15%, var(--retro-burgundy) 15% 30%, var(--retro-orange) 30% 60%, var(--retro-yellow) 60% 85%, var(--retro-tan) 85% 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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
            style={{ border: 0 }}
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
        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', color: 'var(--retro-text)' }}>
          {currentIndex + 1} / {images.length}
        </p>
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
      <Link to="/" style={{ color: 'var(--retro-orange)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <ChevronLeft size={18} /> RETURN TO MISSION CONTROL
      </Link>
      
      <h1 style={{ fontSize: '3.5rem', margin: '20px 0', color: 'var(--retro-burgundy)' }}>{project.title}</h1>

      {/* Steps Layout */}
      {project.layout === 'steps' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {project.steps.map((step, index) => (
            <div key={index} style={{ display: 'grid', gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <h2 style={{ fontSize: '2rem', borderBottom: '4px solid var(--retro-orange)', display: 'inline-block' }}>0{index + 1}. {step.title}</h2>
                <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>{step.description}</p>
              </div>
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <ImageCarousel images={step.images} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Single Layout */}
      {project.layout === 'single' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <p style={{ fontSize: '1.4rem' }}>{project.description}</p>
          </div>
          <div>
            {project.images && project.images.length > 0 && <ImageCarousel images={project.images} />}
          </div>
        </div>
      )}

      {/* NEW: Technical Spec Sheet Section */}
      {project.technicalSpecs && (
        <div style={{ marginTop: '100px', padding: '40px', backgroundColor: '#e8e4d9', border: '4px solid var(--retro-burgundy)', boxShadow: '8px 8px 0px var(--retro-orange)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--retro-burgundy)', fontSize: '1.8rem', borderBottom: '2px solid var(--retro-text)', paddingBottom: '10px', marginBottom: '20px' }}>
            ENGINEERING SPECIFICATIONS & CHALLENGES
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {project.technicalSpecs.map((spec, index) => (
              <li key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--retro-orange)', marginRight: '15px', fontWeight: 'bold' }}>&#9658;</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PDF Viewer for Watch Project */}
      {project.pdfPath && (
        <div style={{ marginTop: '120px', marginBottom: '80px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--retro-burgundy)', fontSize: '1.6rem', marginBottom: '10px' }}>CERTIFIED TECHNICAL DRAWINGS</h3>
          <p style={{ fontSize: '1rem', color: 'var(--retro-text)', marginBottom: '20px', fontStyle: 'italic' }}>
            Production-ready engineering drawings conforming to ASME Y14.5-2018 Geometric Dimensioning and Tolerancing standards. All critical surfaces, datum references, and functional tolerances are fully defined for CNC manufacturing.
          </p>
          <div style={{ border: '10px solid var(--retro-burgundy)', boxShadow: '12px 12px 0px var(--retro-yellow)', height: '800px', backgroundColor: '#222' }}>
            <iframe src={`${project.pdfPath}#toolbar=0`} width="100%" height="100%" style={{ border: 'none' }} title="Technical Drawings" />
          </div>
        </div>
      )}
    </div>
  );
}