import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${slug}`).then((res) => setPost(res.data));
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-slate-700 whitespace-pre-line">{post.content}</p>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;