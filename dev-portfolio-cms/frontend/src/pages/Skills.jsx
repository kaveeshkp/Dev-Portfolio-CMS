import { useEffect, useState } from "react";
import api from "../api/axios";
import SkillCard from "../components/SkillCard";
import { SkillCardSkeleton } from "../components/Skeleton";

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
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wide uppercase">
            Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {loading ? (
          <div className="space-y-12">
            {["Frontend", "Backend", "Database"].map((category) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
                  <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <SkillCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(displaySkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center text-sm">
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
