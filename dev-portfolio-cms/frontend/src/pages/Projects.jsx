import { useEffect, useState } from 'react'
import api from '../api/axios'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="text-slate-400">Loading projects...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="text-red-400">Failed to load projects: {error}</p>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      {projects.length === 0 ? (
        <p className="text-slate-400">No projects available yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
