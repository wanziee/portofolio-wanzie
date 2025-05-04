import EducationCard from "./EducationCard";
import Oracle from "../../assets/oracle.jpeg";
import Bsi from "../../assets/logo-bsi.png";

import BlurFade from "../../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;
const EducationSection = () => {
  return (
    <section id="education" className="mt-[40px]">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold text-primary">Education</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8.05}>
          <EducationCard
            logo={Oracle}
            institution="Oracle Corporation"
            certificate="Professional Certification"
            date="Mar 2024 – Jun 2024"
            description="I participated in the Oracle Data Modeler training program, where I learned how to design and manage database structures using Oracle's modeling tools. The program enhanced my understanding of relational databases, ER diagrams, and best practices in data architecture."
            link="https://drive.google.com/drive/folders/1ZfNZMADh17NjOdlq6MVx4sZrHtz1_gpY?usp=sharing"
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8.1}>
          <EducationCard
            logo={Bsi}
            institution="Bina Sarana Informatika University"
            certificate="Student"
            date="Oct 2023 – Now"
            description="Pursuing a Bachelor's degree in Informatics with a focus on software development, UI/UX design, and digital product innovation. Actively engaging in academic and extracurricular activities to strengthen both technical and soft skills in preparation for a career in the tech industry."
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default EducationSection;
