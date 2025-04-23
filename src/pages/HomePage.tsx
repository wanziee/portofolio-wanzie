import StickyBottomNavigationBar from "../components/StickyBottomNavigationBar";
import Foto from "../assets/foto.jpeg";
import ExperienceCard from "../components/ExperienceCard";
import Telkom from "../assets/telkom.jpg";
import Oracle from "../assets/oracle.jpeg";
import Bsi from "../assets/logo-bsi.png";
import EducationCard from "../components/EducationCard";
import SkillsLabel from "../components/SkillsLabel";

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
      <section id="hero">
        <div className="flex justify-between items-start max-w-6xl mx-auto">
          {/* Teks kiri */}
          <div className="flex-1 space-y-2">
            <h1 className="text-6xl sm:text-5xl xl:text-6xl font-bold flex items-center gap-4 sm:gap-2">
              <span>Hi, I'm Ichwan 👋</span>
            </h1>

            <p className="text-base md:text-xl max-w-xl">
              UI/UX Designer, software engineer
            </p>
          </div>

          {/* Foto kanan */}
          <div>
            <div className="size-28 rounded-full overflow-hidden">
              <img
                src={Foto}
                alt="Theodore Mangowal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-[40px]">
        {/* Judul */}
        <h2 className="text-xl font-bold">About</h2>

        {/* Isi konten */}
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground text-gray-500">
          <p>
            I'm passionate about coding and design, with a deep love for
            painting and drawing as my creative hobbies. Currently, I'm working
            on two personal projects:{" "}
            <a
              href="https://github.com/wanziee/ZielyApp"
              className="text-black font-semibold underline"
            >
              GameLoad
            </a>
            , a website for game top-ups, and{" "}
            <a
              href="https://github.com/wanziee/ZielyApp"
              className="text-black font-semibold underline"
            >
              Quizzie
            </a>
            , a fun and educational quiz app.
          </p>
        </div>
      </section>

      <section id="work" className="mt-[40px]">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <ExperienceCard
            logo={Telkom}
            company="PT.Telkom Indonesia"
            position="IT Intern - Server Room Operations"
            date="Sep 2022 – Oct 2022"
            description="I interned at PT Telkom Indonesia in the server room, where I supported various technical tasks such as system monitoring, hardware setup, and troubleshooting. This experience gave me hands-on exposure to data center operations and helped me better understand IT infrastructure in a real-world environment."
          />
        </div>
      </section>

      <section id="education" className="mt-[40px]">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          <EducationCard
            logo={Oracle}
            institution="Oracle Corporation"
            certificate="Professional Certification"
            date="Mei 2024 – Jun 2024"
            description="I participated in the Oracle Data Modeler training program, where I learned how to design and manage database structures using Oracle's modeling tools. The program enhanced my understanding of relational databases, ER diagrams, and best practices in data architecture."
          />
          <EducationCard
            logo={Bsi}
            institution="Bina Sarana Informatika University"
            certificate="Student"
            date="Oct 2023 – Now"
            description="Pursuing a Bachelor's degree in Informatics with a focus on software development, UI/UX design, and digital product innovation. Actively engaging in academic and extracurricular activities to strengthen both technical and soft skills in preparation for a career in the tech industry."
          />
        </div>
      </section>

      <section id="skills" className="mt-[40px]">
        <SkillsLabel skills={skillsDatas} />
      </section>

      <section id="projects" className="mt-[40px]">
        <div className="space-y-12 w-full py-10">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="inline-block rounded-lg bg-black text-white px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Checkout my latest work!
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Half of these are still under construction. The other half?
              They've magically disappeared into the land of private repos 🧙‍♂️✨
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <StickyBottomNavigationBar />
      </div>
    </div>
  );
};

export default HomePage;
