import ProjectCard from '../components/ProjectCard'

const sampleProjects = [
  { title: 'Portfolio Website', description: 'Personal website and blog.', stack: 'React, Tailwind' },
  { title: 'Admin CMS', description: 'Manage projects and content.', stack: 'React, Axios' },
]

function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
