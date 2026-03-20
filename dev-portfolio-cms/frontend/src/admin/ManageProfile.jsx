import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    title: "",
    bio: "",
    location: "",
    email: "",
    githubUrl: "",
    linkedinUrl: "",
    resumeUrl: "",
    profileImage: "",
  });

  useEffect(() => {
    api.get("/profile")
      .then((res) => setProfile(res.data || profile))
      .catch((err) => setError(err.response?.data?.message || "Failed to load profile"))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      await api.put("/admin/profile", profile);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6 text-white">Manage Profile</h1>
        <p className="text-slate-400">Loading profile...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Manage Profile</h1>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg mb-6">
          Profile updated successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl space-y-4">
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Full Name"
          value={profile.fullName}
          onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Title"
          value={profile.title}
          onChange={(e) => setProfile({ ...profile, title: e.target.value })}
        />
        <textarea className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Bio"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Location"
          value={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="GitHub URL"
          value={profile.githubUrl}
          onChange={(e) => setProfile({ ...profile, githubUrl: e.target.value })}
        />
        <input className="w-full bg-slate-700 text-white border border-slate-600 p-3 rounded" placeholder="LinkedIn URL"
          value={profile.linkedinUrl}
          onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
        />
        <button
          disabled={submitting}
          className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white px-6 py-3 rounded"
        >
          {submitting ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}

export default ManageProfile;