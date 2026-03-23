import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import { ProjectCardSkeleton } from "../components/Skeleton";

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
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects I've built, showcasing my skills in
            frontend and backend development.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800">
            <p className="text-red-600 dark:text-red-400">Failed to load projects: {error}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400">No projects available yet.</p>
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
