import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    level: 0,
    featured: false,
  });

  const fetchSkills = async () => {
    const res = await api.get("/skills");
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/skills", form);
    setForm({ name: "", category: "", level: 0, featured: false });
    fetchSkills();
  };

  const handleDelete = async (id) => {
    await api.delete(`/skills/${id}`);
    fetchSkills();
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mb-8 space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Skill Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input className="w-full border p-3 rounded" type="number" placeholder="Level"
          value={form.level}
          onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
        />
        <button className="bg-black text-white px-6 py-3 rounded">Add Skill</button>
      </form>

      <div className="grid gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{skill.name}</h2>
              <p>{skill.category}</p>
              <p>{skill.level}%</p>
            </div>
            <button
              onClick={() => handleDelete(skill.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageSkills;