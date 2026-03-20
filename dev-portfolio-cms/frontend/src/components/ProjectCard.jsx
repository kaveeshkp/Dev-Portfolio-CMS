function ProjectCard(props) {
  const project = props.project ?? props;

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-slate-600 mb-3">{project.description}</p>
      <p className="text-sm mb-4">{project.techStack ?? project.stack}</p>
      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 rounded"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-black px-4 py-2 rounded"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;