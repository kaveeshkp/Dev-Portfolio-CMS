import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-slate-900 font-medium"
      : "text-slate-600 hover:text-slate-900 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          Kaveesha<span className="text-slate-500">.dev</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={navClass}>
            Skills
          </NavLink>
          <NavLink to="/blog" className={navClass}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </div>

        <Link
          to="/contact"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
