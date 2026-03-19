import SkillCard from '../components/SkillCard'

const sampleSkills = [
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
]

function Skills() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Skills</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills
