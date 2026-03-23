import { useEffect, useState } from "react";
import api from "../api/axios";
import SkillCard from "../components/SkillCard";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/skills")
      .then((res) => setSkills(res.data))
      .catch(() => setSkills([]))
      .finally(() => setLoading(false));
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  const fallbackSkills = {
    Frontend: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 88 },
    ],
    Backend: [
      { name: "Spring Boot", level: 85 },
      { name: "REST API", level: 90 },
      { name: "Node.js", level: 75 },
    ],
    Database: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ],
    Tools: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  };

  const displaySkills =
    Object.keys(groupedSkills).length > 0 ? groupedSkills : fallbackSkills;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2 tracking-wide uppercase">
            Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500">Loading skills...</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(displaySkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm">
                    {category.charAt(0)}
                  </span>
                  {category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
