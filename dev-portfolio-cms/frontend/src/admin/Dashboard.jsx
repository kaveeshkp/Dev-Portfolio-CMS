import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/admin/projects" className="bg-white p-6 rounded-xl shadow">Manage Projects</Link>
        <Link to="/admin/skills" className="bg-white p-6 rounded-xl shadow">Manage Skills</Link>
        <Link to="/admin/profile" className="bg-white p-6 rounded-xl shadow">Manage Profile</Link>
        <Link to="/admin/blogs" className="bg-white p-6 rounded-xl shadow">Manage Blogs</Link>
        <Link to="/admin/messages" className="bg-white p-6 rounded-xl shadow">View Messages</Link>
      </div>
    </div>
  );
}

export default Dashboard;