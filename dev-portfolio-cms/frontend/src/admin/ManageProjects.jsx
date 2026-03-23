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
    setError(null);

    console.log("Submitting project:", form);

    try {
      const response = await api.post("/admin/projects", form);
      console.log("Success:", response.data);

      setForm({
        title: "",
        description: "",
        techStack: "",
        githubUrl: "",
        imageUrl: "",
        featured: false,
        published: true,
      });
      fetchProjects();
    } catch (err) {
      console.error("Error creating project:", err);
      console.error("Error response:", err.response);
      setError(err.response?.data?.message || err.message || "Failed to add project");
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

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Manage Projects</h1>
        <p className="mt-2 text-slate-600">Add and manage your portfolio projects</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
          {error}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input
                className={inputClass}
                placeholder="Project title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tech Stack</label>
              <input
                className={inputClass}
                placeholder="React, Node.js, MySQL"
                value={form.techStack}
                onChange={(e) => setForm({ ...form, techStack: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              className={inputClass}
              placeholder="Project description"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">GitHub URL</label>
            <input
              className={inputClass}
              placeholder="https://github.com/..."
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {submitting ? "Adding..." : "Add Project"}
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Existing Projects</h2>
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block w-6 h-6 border-2 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-2 text-slate-500">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <p className="text-slate-500 text-center py-8">No projects yet. Add one above.</p>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{project.description}</p>
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.split(",").map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-slate-200 text-slate-700">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="ml-4 px-4 py-2 rounded-xl bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageProjects;
