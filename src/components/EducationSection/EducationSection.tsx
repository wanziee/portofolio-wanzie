import EducationCard from "./EducationCard";
import { DATA } from "../../data/resume";

import BlurFade from "../../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;
const EducationSection = () => {
  return (
    <section id="education" className="mt-10">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold text-primary">Education</h2>
        </BlurFade>

        {DATA.educations?.map((education, idx) => (
          <BlurFade key={idx} delay={BLUR_FADE_DELAY * 8.05}>
            <EducationCard
              logo={education.logo}
              institution={education.institution}
              certificate={education.certificate}
              date={education.date}
              description={education.description}
              link={education.link}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
