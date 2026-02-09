import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Project Card Image */}
      <div className="project-card-media">
        {project.cardImage ? (
          <img src={project.cardImage} alt={project.title} className="project-card-image" />
        ) : (
          <div className="project-card-placeholder">[Image: {project.title}]</div>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-meta">
          {project.year} | {project.category}
        </p>
        <p>{project.summary}</p>
        <div className="project-card-actions">
          <Link to={`/project/${project.id}`} className="btn-retro">
            FULL SPECS &gt;
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="btn-retro secondary"
              target="_blank"
              rel="noreferrer"
            >
              {project.githubLabel || "GITHUB"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
