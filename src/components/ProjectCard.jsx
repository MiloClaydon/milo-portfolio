import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div style={{
      border: '2px solid var(--retro-brown)',
      backgroundColor: '#fff',
      padding: '0',
      boxShadow: '8px 8px 0px var(--retro-orange)',
      transition: 'transform 0.2s'
    }}>
      {/* Placeholder for Image - You will add real images later */}
      <div style={{
        height: '150px',
        backgroundColor: '#ddd',
        borderBottom: '2px solid var(--retro-brown)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        [Image: {project.title}]
      </div>
      
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0 }}>{project.title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>{project.year} | {project.category}</p>
        <p>{project.summary}</p>
        <Link to={`/project/${project.id}`} className="btn-retro">
          FULL SPECS &gt;
        </Link>
      </div>
    </div>
  );
}