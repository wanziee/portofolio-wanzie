import React from "react";

type SkillsLabelProps = {
  skill: string;
};

const SkillsLabel = ({ skill }: SkillsLabelProps) => {
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow bg-black text-white">
          {skill}
        </div>
      </div>
    </div>
  );
};

export default SkillsLabel;
