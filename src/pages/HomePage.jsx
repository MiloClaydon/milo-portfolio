import { projects, education, skills } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header style={{ padding: '60px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', color: 'var(--retro-brown)' }}>
          MILO CLAYDON
        </h1>
        <h2 style={{ color: 'var(--retro-orange)',fontSize: '3.5rem'}}>Engineer</h2>
        <div className="retro-stripes" style={{ maxWidth: '500px', margin: '0 auto 20px' }}></div>
        <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '1.2rem' }}>
          Multidisciplinary engineer specializing in mechatronics, automation, and full-cycle product development.
          Expert in CNC machining, lithium battery design, and rapid prototyping.
        </p>
        <a href="/contact" className="btn-retro">CONTACT ME</a>
      </header>

      
      {/* Project Gallery */}
      <section>
        <h2 style={{ borderBottom: '4px solid var(--retro-brown)', display: 'inline-block' }}>Project Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      {/* Skills & Education Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
        <div style={{ border: '2px solid var(--retro-brown)', padding: '30px', backgroundColor: 'white' }}>
          <h3 style={{ color: 'var(--retro-orange)' }}>Credentials</h3>
          <h4>{education.school}</h4>
          <p><strong>{education.degree}</strong> ({education.year})</p>
          <ul style={{ paddingLeft: '20px' }}>
            {education.details.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div style={{ border: '2px solid var(--retro-brown)', padding: '30px', backgroundColor: 'white' }}>
          <h3 style={{ color: 'var(--retro-orange)' }}>Technical Arsenal</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {skills.map((skill, index) => (
              <span key={index} style={{ 
                backgroundColor: 'var(--retro-tan)', 
                padding: '5px 10px', 
                border: '1px solid var(--retro-brown)',
                fontWeight: 'bold'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}