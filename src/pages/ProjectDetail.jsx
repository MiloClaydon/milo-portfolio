import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="container"><h2>Project not found!</h2></div>;

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--retro-orange)', fontWeight: 'bold' }}>&larr; BACK TO MISSION CONTROL</Link>
      
      <h1 style={{ fontSize: '3rem', marginTop: '20px' }}>{project.title}</h1>
      <div className="retro-stripes"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginTop: '40px' }}>
        {/* Left Column: Story */}
        <div>
          <div style={{ 
            height: '400px', 
            backgroundColor: '#ddd', 
            border: '2px solid var(--retro-brown)',
            display: 'flex', justifyContent: 'center', alignItems: 'center' 
          }}>
            [Main Image Placeholder]
          </div>
          
          <h3>Project Brief</h3>
          <p style={{ fontSize: '1.1rem' }}>{project.description}</p>
          
          <h3>Engineering Challenges</h3>
          <p>
            {/* Placeholder for future detailed text */}
            This section will detail the specific engineering problems solved, including calculation analysis, material selection, and iteration history.
          </p>
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