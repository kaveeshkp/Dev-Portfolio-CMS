import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get("/skills").then((res) => setSkills(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;