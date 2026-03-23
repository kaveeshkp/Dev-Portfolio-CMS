import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data.slice(0, 3)))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  const skills = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Spring Boot", category: "Backend", icon: "🍃" },
    { name: "MySQL", category: "Database", icon: "🗄️" },
    { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
    { name: "REST API", category: "Backend", icon: "🔗" },
    { name: "Git", category: "Tools", icon: "📦" },
  ];

  return (
    <>
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-slate-500 mb-2 tracking-wide uppercase">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Explore some of my recent work showcasing modern web development
              with React, Spring Boot, and more.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-slate-500">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-slate-500">
              No projects available yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
            >
              View All Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-slate-500 mb-2 tracking-wide uppercase">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Skills & Technologies
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Technologies I work with to build modern, scalable web applications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-slate-500">{skill.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
            >
              View All Skills
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's build something great together
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            I'm open to freelance work, collaborations, and developer opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
