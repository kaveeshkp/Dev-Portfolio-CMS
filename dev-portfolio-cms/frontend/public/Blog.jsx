import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/blogs").then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-slate-600 mt-2">{post.summary}</p>
              <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-600">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;