import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/blogs")
      .then((res) => setPosts(res.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const fallbackPosts = [
    {
      id: "1",
      title: "How I built this portfolio",
      summary: "A walkthrough of the technologies and decisions behind this portfolio CMS project.",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      title: "React routing tips",
      summary: "Best practices for handling routing in React applications with React Router.",
      createdAt: "2024-01-10",
    },
    {
      id: "3",
      title: "Getting started with Spring Boot",
      summary: "An introduction to building REST APIs with Spring Boot and Java.",
      createdAt: "2024-01-05",
    },
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2 tracking-wide uppercase">
            Articles
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Blog
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Thoughts on web development, programming, and technology.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500">Loading posts...</p>
          </div>
        ) : displayPosts.length === 0 ? (
          <div className="text-center py-12 bg-slate-100 rounded-2xl">
            <p className="text-slate-500">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-600"></div>
                <div className="p-6">
                  {post.createdAt && (
                    <p className="text-sm text-slate-500 mb-2">
                      {formatDate(post.createdAt)}
                    </p>
                  )}
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition">
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className="mt-3 text-slate-600 line-clamp-2">
                      {post.summary}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-slate-900">
                    Read more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
