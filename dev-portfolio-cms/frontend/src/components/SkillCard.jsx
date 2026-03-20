function SkillCard(props) {
  const skill = props.skill ?? props;
  const levelValue = typeof skill.level === "number" ? skill.level : 0;

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold">{skill.name}</h3>
      <p className="text-slate-500">{skill.category ?? "General"}</p>
      <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
        <div
          className="bg-black h-2 rounded-full"
          style={{ width: `${levelValue}%` }}
        ></div>
      </div>
      <p className="text-sm mt-2">
        {typeof skill.level === "number" ? `${skill.level}%` : skill.level}
      </p>
    </div>
  );
}

export default SkillCard;