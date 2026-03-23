import { Link } from "react-router-dom";

function About() {
  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "REST API", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Full Stack Developer",
      description: "Building modern web applications with React and Spring Boot",
    },
    {
      year: "2023",
      title: "Started Learning Spring Boot",
      description: "Expanded backend skills with Java and Spring ecosystem",
    },
    {
      year: "2022",
      title: "Frontend Development",
      description: "Mastered React, Tailwind CSS, and modern JavaScript",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              I'm a Full Stack Developer passionate about building great products
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              I specialize in creating responsive frontend experiences and secure
              backend systems. My goal is to build applications that are not only
              functional but also delightful to use.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or writing about my development journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
              >
                View My Work
              </Link>
              <a
                href="#"
                className="px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                <span className="text-8xl font-bold text-white/20">Y</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:shadow-md transition"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            My Journey
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 bg-white border border-slate-200 rounded-2xl p-6"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-xl font-bold">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
