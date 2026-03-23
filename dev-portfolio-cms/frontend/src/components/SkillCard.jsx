function SkillCard({ skill }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>

      <div className="mt-4 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-2 rounded-full bg-slate-900 dark:bg-white"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
