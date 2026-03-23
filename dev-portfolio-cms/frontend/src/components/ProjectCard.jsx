function ProjectCard({ project }) {
  const techList = project.techStack
    ? project.techStack.split(",").map((item) => item.trim())
    : [];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
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
              className="rounded-xl bg-slate-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
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
