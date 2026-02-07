import { projects, skills } from '../data/projects';
import ProjectCard from '../components/cards/ProjectCard';
import Logo from '../assets/Logo.png';

const miloPhoto = 'https://res.cloudinary.com/dpe1tjjay/image/upload/v1770348564/HomePagePhoto_ssqm3u.jpg';

export default function Home() {
  return (
    <div className="container">
      
      {/* Hero Split Section */}
      <section className="hero-split">
        {/* Left Side: Text */}
        <div className="hero-text">
          <img src={Logo} alt="Milo Claydon logo" className="home-logo" />
          <h1 className="home-hero-title">
            MILO<br />CLAYDON
          </h1>
          <h2 className="home-hero-subtitle">
            Engineer
          </h2>
          
          <p className="home-hero-body">
            I always like having a project. Whether it's designing a new part, optimizing a process, or learning a new skill, I thrive on challenges that push me to think creatively and technically. Here are some of the things I've been working on.
          </p>
          
          <a href="/contact" className="btn-retro">REACH OUT</a>
        </div>

        {/* Right Side: Photo (plain container - no decorative stripes) */}
        <div className="hero-photo-wrapper">
          <img src={miloPhoto} alt="Milo Claydon sitting by a canal" className="hero-photo" />
        </div>
      </section>

      {/* A full width horizontal stripe break */}
      <div className="retro-stripes-horizontal"></div>

      {/* Project Gallery */}
      <section className="home-projects">
        <h2 className="home-projects-title">
          Selected Projects
        </h2>
        <div className="home-projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Arsenal */}
      <section className="home-skills">
        <h3 className="home-skills-title">
          Technical Arsenal
        </h3>
        <p className="home-skills-intro">The tools and technologies I use to bring products to life.</p>
        <div className="home-skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}