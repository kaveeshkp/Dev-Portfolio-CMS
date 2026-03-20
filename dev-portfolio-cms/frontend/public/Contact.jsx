import { useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/contact", form);
    alert("Message sent successfully");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 space-y-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full border p-3 rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full border p-3 rounded"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <textarea
            className="w-full border p-3 rounded"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button className="bg-black text-white px-6 py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;