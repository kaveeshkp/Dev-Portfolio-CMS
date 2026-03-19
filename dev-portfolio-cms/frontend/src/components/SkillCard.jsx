function SkillCard({ name, level }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <h3 className="text-base font-semibold text-white">{name}</h3>
      <p className="mt-1 text-sm text-slate-300">Level: {level}</p>
    </article>
  )
}

export default SkillCard