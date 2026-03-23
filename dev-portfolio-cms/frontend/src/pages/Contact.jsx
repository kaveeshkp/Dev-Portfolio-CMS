import { useState } from "react";
import api from "../api/axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await api.post("/messages", formData);
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Contact Me
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-xl ${
                    status.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm currently available for freelance work, collaborations, and
                full-time opportunities. Feel free to reach out through any of
                the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:kaveeshabandara1812@gmail.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Email</p>
                  <p className="text-slate-600 dark:text-slate-400">kaveeshabandara1812@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/kaveeshkp"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">GitHub</p>
                  <p className="text-slate-600 dark:text-slate-400">github.com/kaveeshkp</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/kaveesha"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">LinkedIn</p>
                  <p className="text-slate-600 dark:text-slate-400">linkedin.com/in/kaveesha</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
