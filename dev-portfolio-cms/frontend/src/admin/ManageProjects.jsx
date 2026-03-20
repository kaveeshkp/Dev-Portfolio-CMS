import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
    featured: false,
    published: true,
  });

  const fetchProjects = async () => {
    const res = await api.get("/projects/admin");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/projects", form);
    setForm({
      title: "",
      description: "",
      techStack: "",
      githubUrl: "",
      liveUrl: "",
      imageUrl: "",
      featured: false,
      published: true,
    });
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mb-8 space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea className="w-full border p-3 rounded" placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Tech Stack"
          value={form.techStack}
          onChange={(e) => setForm({ ...form, techStack: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="GitHub URL"
          value={form.githubUrl}
          onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Live URL"
          value={form.liveUrl}
          onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
        />
        <button className="bg-black text-white px-6 py-3 rounded">Add Project</button>
      </form>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-slate-600">{project.description}</p>
            <p>{project.techStack}</p>
            <button
              onClick={() => handleDelete(project.id)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProjects;