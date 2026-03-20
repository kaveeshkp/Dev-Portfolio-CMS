import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageBlogs() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    published: true,
  });

  const fetchPosts = async () => {
    const res = await api.get("/blogs/admin");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/blogs", form);
    setForm({ title: "", slug: "", summary: "", content: "", published: true });
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await api.delete(`/blogs/${id}`);
    fetchPosts();
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mb-8 space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
        <textarea className="w-full border p-3 rounded" rows="6" placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button className="bg-black text-white px-6 py-3 rounded">Add Blog</button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.summary}</p>
            <button
              onClick={() => handleDelete(post.id)}
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

export default ManageBlogs;