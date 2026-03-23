import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2 tracking-wide uppercase">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Projects
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A collection of projects I've built, showcasing my skills in
            frontend and backend development.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-50 rounded-2xl">
            <p className="text-red-600">Failed to load projects: {error}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 bg-slate-100 rounded-2xl">
            <p className="text-slate-500">No projects available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
