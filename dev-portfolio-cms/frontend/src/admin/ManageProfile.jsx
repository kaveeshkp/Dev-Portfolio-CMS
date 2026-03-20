import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageProfile() {
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
    api.get("/profile").then((res) => setProfile(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put("/profile", profile);
    alert("Profile updated");
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Profile</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Full Name"
          value={profile.fullName}
          onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Title"
          value={profile.title}
          onChange={(e) => setProfile({ ...profile, title: e.target.value })}
        />
        <textarea className="w-full border p-3 rounded" placeholder="Bio"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Location"
          value={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="GitHub URL"
          value={profile.githubUrl}
          onChange={(e) => setProfile({ ...profile, githubUrl: e.target.value })}
        />
        <input className="w-full border p-3 rounded" placeholder="LinkedIn URL"
          value={profile.linkedinUrl}
          onChange={(e) => setProfile({ ...profile, linkedinUrl: e.target.value })}
        />
        <button className="bg-black text-white px-6 py-3 rounded">Save Profile</button>
      </form>
    </div>
  );
}

export default ManageProfile;