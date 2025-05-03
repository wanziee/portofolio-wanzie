type SkillsLabelProps = {
  skills: string[];
};

const SkillsLabel = ({ skills }: SkillsLabelProps) => {
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <h2 className="text-xl font-bold text-primary">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-background shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsLabel;
