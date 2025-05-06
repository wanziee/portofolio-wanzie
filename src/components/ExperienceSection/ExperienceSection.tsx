import ExperienceCard from "./ExperienceCard";
import BlurFade from "../../magicui/blur-fade";
import { DATA } from "../../data/resume";

const BLUR_FADE_DELAY = 0.04;
const ExperienceSection = () => {
  return (
    <section id="work" className="mt-[40px]">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold text-primary">Work Experience</h2>
        </BlurFade>

        {DATA.workExperiences?.map((experience, idx) => (
          <BlurFade key={idx} delay={BLUR_FADE_DELAY * 6}>
            <ExperienceCard
              logo={experience.logo}
              company={experience.company}
              position={experience.position}
              date={experience.date}
              description={experience.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
