function ProjectCard({ project }) {
  const techList = project.techStack
    ? project.techStack.split(",").map((item) => item.trim())
    : [];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
