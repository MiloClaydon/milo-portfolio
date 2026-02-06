import { projects, skills } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const miloPhoto = 'https://res.cloudinary.com/dpe1tjjay/image/upload/v1770348564/HomePagePhoto_ssqm3u.jpg';

export default function Home() {
  return (
    <div className="container">
      
      {/* Hero Split Section */}
      <section className="hero-split">
        {/* Left Side: Text */}
        <div className="hero-text">
          <h1 style={{ fontSize: '4rem', margin: '0', lineHeight: '0.9', color: 'var(--retro-burgundy)' }}>
            MILO<br />CLAYDON
          </h1>
          <h2 style={{ color: 'var(--retro-orange)', fontSize: '2.5rem', margin: '10px 0 25px 0' }}>
            Engineer
          </h2>
          
          <p style={{ maxWidth: '500px', fontSize: '1.3rem', marginBottom: '35px', fontWeight: '500' }}>
            I always like having a project. Whether it's designing a new part, optimizing a process, or learning a new skill, I thrive on challenges that push me to think creatively and technically. Here are some of the things I've been working on.
          </p>
          
          <a href="/contact" className="btn-retro">REACH OUT</a>
        </div>

        {/* Right Side: Photo (plain container - no decorative stripes) */}
        <div style={{ flex: 1, maxWidth: 450 }}>
          <img src={miloPhoto} alt="Milo Claydon sitting by a canal" className="hero-photo" />
        </div>
      </section>

      {/* A full width horizontal stripe break */}
      <div className="retro-stripes-horizontal"></div>

      {/* Project Gallery */}
      <section style={{ marginBottom: '80px' }}>
        <h2 style={{ borderBottom: '4px solid var(--retro-burgundy)', display: 'inline-block', color: 'var(--retro-orange)' }}>
          Selected Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: '40px' }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Arsenal */}
      <section style={{ margin: '60px 0', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--retro-burgundy)', fontSize: '2rem', display: 'inline-block', borderBottom: '3px solid var(--retro-orange)' }}>
          Technical Arsenal
        </h3>
        <p style={{maxWidth: '700px', margin: '20px auto 30px'}}>The tools and technologies I use to bring products to life.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '900px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
            <span key={index} style={{ 
              backgroundColor: 'var(--retro-tan)', 
              color: 'var(--retro-text)',
              padding: '8px 16px', 
              border: '2px solid var(--retro-orange)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.1)'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}