export default function ProjectCard({ title, tech, description, demoLink, githubLink }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="tech-stack">{tech}</p>
      <p className="description">{description}</p>
      <div className="buttons">
        <a href={demoLink} target="_blank" rel="noreferrer">Live Demo</a>
        <a href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}
