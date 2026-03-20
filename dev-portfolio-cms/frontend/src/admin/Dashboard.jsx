import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-white">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/admin/projects" className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl text-white">Manage Projects</Link>
        <Link to="/admin/skills" className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl text-white">Manage Skills</Link>
        <Link to="/admin/profile" className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl text-white">Manage Profile</Link>
        <Link to="/admin/blogs" className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl text-white">Manage Blogs</Link>
        <Link to="/admin/messages" className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl text-white">View Messages</Link>
      </div>
    </div>
  );
}

export default Dashboard;