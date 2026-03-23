import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";

function Home() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState({
    fullName: "Kaveesha",
    title: "Full Stack Developer",
    bio: "I build modern web applications with React and Spring Boot.",
  });

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const [projectsRes, skillsRes, profileRes] = await Promise.all([
        api.get("/projects"),
        api.get("/skills"),
        api.get("/profile"),
      ]);

      setProjects(projectsRes.data.slice(0, 3));
      setSkills(skillsRes.data.slice(0, 6));
      if (profileRes.data) {
        setProfile(profileRes.data);
      }
    } catch (error) {
      console.error("Failed to load home data", error);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Building clean and modern web applications
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {profile.bio ||
              "I create responsive frontend experiences and secure backend systems using React, Spring Boot, and MySQL."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-bold">{projects.length || 3}+</p>
              <p className="text-sm text-slate-500">Featured Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{skills.length || 6}+</p>
              <p className="text-sm text-slate-500">Core Skills</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-slate-500">Responsive UI</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 text-center text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                  Portfolio
                </p>
                <h2 className="mt-4 text-3xl font-bold">
                  {profile.fullName || "Kaveesha"}
                </h2>
                <p className="mt-2 text-slate-300">
                  {profile.title || "Full Stack Developer"}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-md">
            React
          </div>
          <div className="absolute -right-3 top-20 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-md">
            Spring Boot
          </div>
          <div className="absolute bottom-6 left-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-md">
            MySQL
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold">Turning ideas into polished products</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            I enjoy building user-friendly interfaces and reliable backend systems.
            My focus is on creating projects that are clean, fast, secure, and easy
            to maintain.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
          >
            More About Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Portfolio Highlights
            </p>
            <h2 className="mt-2 text-3xl font-bold">Featured Projects</h2>
          </div>

          <Link
            to="/projects"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            View all projects →
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No projects added yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* Skills Preview */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Tech Stack
              </p>
              <h2 className="mt-2 text-3xl font-bold">Skills Preview</h2>
            </div>

            <Link
              to="/skills"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              View all skills →
            </Link>
          </div>

          {skills.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
              No skills available yet.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Let's Work Together
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Have an idea? Let's build it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I'm open to freelance work, collaborations, and developer opportunities.
            Let's create something modern and meaningful.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-200"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="rounded-xl border border-slate-600 px-6 py-3 font-medium text-white hover:bg-slate-800"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
