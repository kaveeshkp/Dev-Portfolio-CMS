import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    blogs: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projectsRes, skillsRes, blogsRes, messagesRes] = await Promise.all([
          api.get("/projects").catch(() => ({ data: [] })),
          api.get("/skills").catch(() => ({ data: [] })),
          api.get("/blogs").catch(() => ({ data: [] })),
          api.get("/messages").catch(() => ({ data: [] })),
        ]);
        setStats({
          projects: projectsRes.data.length,
          skills: skillsRes.data.length,
          blogs: blogsRes.data.length,
          messages: messagesRes.data.length,
        });
      } catch {
        // Keep default stats
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Projects",
      value: stats.projects,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      to: "/admin/projects",
    },
    {
      label: "Skills",
      value: stats.skills,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      to: "/admin/skills",
    },
    {
      label: "Blogs",
      value: stats.blogs,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      to: "/admin/blogs",
    },
    {
      label: "Messages",
      value: stats.messages,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      to: "/admin/messages",
    },
  ];

  const quickActions = [
    { label: "Add Project", to: "/admin/projects", color: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
    { label: "Add Skill", to: "/admin/skills", color: "bg-green-50 text-green-700 hover:bg-green-100" },
    { label: "Write Blog", to: "/admin/blogs", color: "bg-purple-50 text-purple-700 hover:bg-purple-100" },
    { label: "Edit Profile", to: "/admin/profile", color: "bg-orange-50 text-orange-700 hover:bg-orange-100" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">Welcome back! Here's an overview of your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Link
            key={stat.label}
            to={stat.to}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
              </div>
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                {stat.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${action.color}`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
