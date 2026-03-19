import { NavLink, Outlet } from 'react-router-dom'

const adminLinks = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/projects', label: 'Projects' },
  { to: '/admin/skills', label: 'Skills' },
  { to: '/admin/profile', label: 'Profile' },
  { to: '/admin/blogs', label: 'Blogs' },
  { to: '/admin/messages', label: 'Messages' },
]

function AdminLayout() {
  return (
    <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
      <aside className="border-r border-slate-800 bg-slate-950 p-4">
        <h2 className="mb-4 text-xl font-bold text-cyan-300">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm ${isActive ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300 hover:bg-slate-800'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="bg-slate-900 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout