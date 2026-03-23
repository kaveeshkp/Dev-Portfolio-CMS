import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/blogs/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => {
        setPost({
          id,
          title: "Sample Blog Post",
          content:
            "This is a sample blog post content. The actual content will be loaded from the API when available.",
          createdAt: new Date().toISOString(),
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500">Loading post...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <article className="max-w-3xl mx-auto px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-12">
          {post?.createdAt && (
            <p className="text-sm text-slate-500 mb-4">
              {formatDate(post.createdAt)}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {post?.title}
          </h1>
        </header>

        <div className="prose prose-slate max-w-none">
          <div className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
            {post?.content}
          </div>
        </div>
      </article>
    </section>
  );
}

export default BlogDetail;
