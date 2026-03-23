function SkillCard(props) {
  const skill = props.skill ?? props;
  const levelValue = typeof skill.level === "number" ? skill.level : 0;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
          <p className="text-sm text-slate-500">{skill.category ?? "General"}</p>
        </div>
        {typeof skill.level === "number" && (
          <span className="text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
            {skill.level}%
          </span>
        )}
      </div>

      {typeof skill.level === "number" ? (
        <div className="w-full bg-slate-100 rounded-full h-2.5">
          <div
            className="bg-slate-900 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${levelValue}%` }}
          ></div>
        </div>
      ) : (
        <span className="inline-block text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
          {skill.level}
        </span>
      )}
    </div>
  );
}

export default SkillCard;
