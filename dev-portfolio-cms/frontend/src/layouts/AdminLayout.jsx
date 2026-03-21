import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const adminLinks = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/projects', label: 'Projects' },
  { to: '/admin/skills', label: 'Skills' },
  { to: '/admin/profile', label: 'Profile' },
  { to: '/admin/blogs', label: 'Blogs' },
  { to: '/admin/messages', label: 'Messages' },
]

function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
      <aside className="border-r border-slate-800 bg-slate-950 p-4 flex flex-col">
        <h2 className="mb-4 text-xl font-bold text-cyan-300">Admin Panel</h2>
        <nav className="flex flex-col gap-2 flex-1">
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
        <button
          onClick={handleLogout}
          className="mt-4 rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
        >
          Logout
        </button>
      </aside>
      <main className="bg-slate-900 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
