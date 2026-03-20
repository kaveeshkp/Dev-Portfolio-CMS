import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/profile").then((res) => setProfile(res.data));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{profile.fullName}</h1>
        <h2 className="text-2xl text-slate-600 mb-4">{profile.title}</h2>
        <p className="text-slate-700 mb-4">{profile.bio}</p>
        <p className="mb-2">Location: {profile.location}</p>
        <p className="mb-2">Email: {profile.email}</p>
      </div>
      <Footer />
    </>
  );
}

export default About;