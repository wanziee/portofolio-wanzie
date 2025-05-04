import BlurFade from "../../magicui/blur-fade";
import BlurFadeText from "../../magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

type SkillsLabelProps = {
  skills: string[];
};

const SkillsLabel = ({ skills }: SkillsLabelProps) => {
  return (
    <section id="skills" className="mt-[40px]">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold text-primary">Skills</h2>
        </BlurFade>

        <div className="flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + idx * 0.05}>
              <div
                key={idx}
                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-background shadow"
              >
                {skill}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsLabel;
