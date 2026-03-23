import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    level: 80,
    featured: false,
  });

  const fetchSkills = async () => {
    try {
      setError(null);
      const res = await api.get("/skills");
      setSkills(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load skills");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/admin/skills", form);
      setForm({ name: "", category: "", level: 80, featured: false });
      fetchSkills();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add skill");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;
    try {
      await api.delete(`/admin/skills/${id}`);
      fetchSkills();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete skill");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition";

  const categories = ["Frontend", "Backend", "Database", "Tools", "Other"];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Manage Skills</h1>
        <p className="mt-2 text-slate-600">Add and manage your technical skills</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
          {error}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Add New Skill</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Skill Name</label>
              <input
                className={inputClass}
                placeholder="e.g., React"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <select
                className={inputClass}
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                required
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Level ({form.level}%)</label>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-2"
                value={form.level}
                onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {submitting ? "Adding..." : "Add Skill"}
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Existing Skills</h2>
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block w-6 h-6 border-2 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-2 text-slate-500">Loading skills...</p>
          </div>
        ) : skills.length === 0 ? (
          <p className="text-slate-500 text-center py-8">No skills yet. Add one above.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                    <p className="text-slate-500 text-sm">{skill.category}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-700 bg-slate-200 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                  <div
                    className="bg-slate-900 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => handleDelete(skill.id)}
                  className="w-full px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition"
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

export default ManageSkills;
