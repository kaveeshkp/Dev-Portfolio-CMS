import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    published: true,
  });

  const fetchPosts = async () => {
    try {
      setError(null);
      const res = await api.get("/admin/blogs");
      setPosts(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/admin/blogs", form);
      setForm({ title: "", slug: "", summary: "", content: "", published: true });
      fetchPosts();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add blog");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await api.delete(`/admin/blogs/${id}`);
      fetchPosts();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete blog");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Manage Blogs</h1>

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
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
        <textarea className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" rows="6" placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button
          disabled={submitting}
          className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white px-6 py-3 rounded"
        >
          {submitting ? "Adding..." : "Add Blog"}
        </button>
      </form>

      {loading ? (
        <p className="text-slate-400">Loading blogs...</p>
      ) : posts.length === 0 ? (
        <p className="text-slate-400">No blog posts yet. Add one above.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-slate-800 p-5 rounded-xl">
              <h2 className="text-xl font-bold text-white">{post.title}</h2>
              <p className="text-slate-400">{post.summary}</p>
              <button
                onClick={() => handleDelete(post.id)}
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

export default ManageBlogs;