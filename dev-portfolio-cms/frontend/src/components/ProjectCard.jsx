function ProjectCard({ title, description, stack }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <p className="mt-3 text-xs text-cyan-300">{stack}</p>
    </article>
  )
}

export default ProjectCard
