import ExperienceCard from "./ExperienceCard";
import Telkom from "../../assets/telkom.jpg";

const ExperienceSection = () => {
  return (
    <section id="work" className="mt-[40px]">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold text-primary">Work Experience</h2>
        <ExperienceCard
          logo={Telkom}
          company="PT.Telkom Indonesia"
          position="IT Intern - Server Room Operations"
          date="Sep 2022 – Oct 2022"
          description="I interned at PT Telkom Indonesia in the server room, where I supported various technical tasks such as system monitoring, hardware setup, and troubleshooting. This experience gave me hands-on exposure to data center operations and helped me better understand IT infrastructure in a real-world environment."
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
