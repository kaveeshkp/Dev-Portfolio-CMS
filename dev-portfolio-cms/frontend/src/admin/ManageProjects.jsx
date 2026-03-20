import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
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
    try {
      setError(null);
      const res = await api.get("/admin/projects");
      setProjects(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/admin/projects", form);
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
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add project");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await api.delete(`/admin/projects/${id}`);
      fetchProjects();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete project");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Manage Projects</h1>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl mb-8 space-y-4">
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Tech Stack"
          value={form.techStack}
          onChange={(e) => setForm({ ...form, techStack: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="GitHub URL"
          value={form.githubUrl}
          onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Live URL"
          value={form.liveUrl}
          onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
        />
        <button
          disabled={submitting}
          className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white px-6 py-3 rounded"
        >
          {submitting ? "Adding..." : "Add Project"}
        </button>
      </form>

      {loading ? (
        <p className="text-slate-400">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-slate-400">No projects yet. Add one above.</p>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 p-5 rounded-xl">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="text-slate-400">{project.description}</p>
              <p className="text-slate-500 text-sm">{project.techStack}</p>
              <button
                onClick={() => handleDelete(project.id)}
                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageProjects;