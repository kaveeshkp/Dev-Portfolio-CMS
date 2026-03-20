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
    level: 0,
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
      setForm({ name: "", category: "", level: 0, featured: false });
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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Manage Skills</h1>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl mb-8 space-y-4">
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Skill Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" type="number" placeholder="Level"
          value={form.level}
          onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
        />
        <button
          disabled={submitting}
          className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white px-6 py-3 rounded"
        >
          {submitting ? "Adding..." : "Add Skill"}
        </button>
      </form>

      {loading ? (
        <p className="text-slate-400">Loading skills...</p>
      ) : skills.length === 0 ? (
        <p className="text-slate-400">No skills yet. Add one above.</p>
      ) : (
        <div className="grid gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-slate-800 p-5 rounded-xl flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">{skill.name}</h2>
                <p className="text-slate-400">{skill.category}</p>
                <p className="text-slate-500 text-sm">{skill.level}%</p>
              </div>
              <button
                onClick={() => handleDelete(skill.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
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

export default ManageSkills;