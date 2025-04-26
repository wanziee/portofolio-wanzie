import StickyBottomNavigationBar from "../components/dock/StickyBottomNavigationBar";

import SkillsLabel from "../components/SkillsLabel";
import ProjectCard from "../components/ProjectCard";
import EducationSection from "../components/EducationSection/EducationSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";

const skillsDatas = [
  "Design",
  "React",
  "Laravel",
  "Swift",
  "Typescript",
  "Php",
  "Project Management",
  "Python",
  "Painting",
  "Drawing",
  "SwiftUI",
];

const HomePage = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection />

      {/* about section */}
      <AboutSection />

      {/* experience section */}
      <ExperienceSection />

      {/* education section */}
      <EducationSection />

      <section id="skills" className="mt-[40px]">
        <SkillsLabel skills={skillsDatas} />
      </section>

      {/* project section */}
      <ProjectCard />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <StickyBottomNavigationBar />
      </div>
    </div>
  );
};

export default HomePage;
