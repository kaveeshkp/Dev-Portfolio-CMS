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

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Manage Blogs</h1>
        <p className="mt-2 text-slate-600">Write and manage your blog posts</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
          {error}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Write New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input
                className={inputClass}
                placeholder="Post title"
                value={form.title}
                onChange={(e) => {
                  setForm({
                    ...form,
                    title: e.target.value,
                    slug: generateSlug(e.target.value),
                  });
                }}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Slug</label>
              <input
                className={inputClass}
                placeholder="post-url-slug"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Summary</label>
            <input
              className={inputClass}
              placeholder="Brief summary of the post"
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Content</label>
            <textarea
              className={inputClass}
              rows={8}
              placeholder="Write your blog post content here..."
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {submitting ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Published Posts</h2>
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block w-6 h-6 border-2 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-2 text-slate-500">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <p className="text-slate-500 text-center py-8">No blog posts yet. Write one above.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{post.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{post.summary}</p>
                  <p className="text-slate-400 text-xs mt-2">/{post.slug}</p>
                </div>
                <button
                  onClick={() => handleDelete(post.id)}
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

export default ManageBlogs;
