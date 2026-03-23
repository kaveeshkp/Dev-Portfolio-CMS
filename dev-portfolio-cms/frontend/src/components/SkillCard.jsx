function SkillCard({ skill }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
        <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
      </div>

      <p className="mt-1 text-sm text-slate-500">{skill.category}</p>

      <div className="mt-4 h-2 w-full rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-slate-900"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
