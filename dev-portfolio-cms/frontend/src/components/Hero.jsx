import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Building clean and modern web applications
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            I create responsive frontend experiences and secure backend systems
            using React, Spring Boot, and MySQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-slate-600">
            <div>
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p>Projects Built</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">3+</p>
              <p>Core Stacks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p>Responsive UI</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
              <span className="text-6xl font-bold text-white/20">K</span>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-md px-4 py-3 border border-slate-200 text-sm font-medium text-slate-700">
            React
          </div>
          <div className="absolute top-20 -right-4 bg-white rounded-2xl shadow-md px-4 py-3 border border-slate-200 text-sm font-medium text-slate-700">
            Spring Boot
          </div>
          <div className="absolute -bottom-4 left-8 bg-white rounded-2xl shadow-md px-4 py-3 border border-slate-200 text-sm font-medium text-slate-700">
            MySQL
          </div>
          <div className="absolute bottom-20 -right-2 bg-white rounded-2xl shadow-md px-4 py-3 border border-slate-200 text-sm font-medium text-slate-700">
            REST API
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
