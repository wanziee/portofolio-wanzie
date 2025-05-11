import StickyBottomNavigationBar from "../components/dock/StickyBottomNavigationBar";
import SkillsLabel from "../components/SkillsSection/SkillsLabel";
import EducationSection from "../components/EducationSection/EducationSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import AboutSection from "../components/Hero&AboutSection/AboutSection";
import HeroSection from "../components/Hero&AboutSection/HeroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import ContactSection from "../components/ContactMe/ContactSection";

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

      <SkillsLabel />

      {/* project section */}
      <ProjectSection />

      <ContactSection />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <StickyBottomNavigationBar />
      </div>
    </div>
  );
};

export default HomePage;
