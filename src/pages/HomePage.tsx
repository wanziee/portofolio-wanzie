import StickyBottomNavigationBar from "../components/StickyBottomNavigationBar";
import Foto from "../assets/foto.jpeg";
import ExperienceCard from "../components/ExperienceCard";
import Telkom from "../assets/telkom.jpg";
import Oracle from "../assets/oracle.jpeg";
import Bsi from "../assets/logo-bsi.png";
import GameloadProject from "../assets/gameload_project.png";
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
        <div className="flex justify-between items-start max-w-6xl mx-auto text-primary">
          {/* Teks kiri */}
          <div className="flex-1 space-y-2">
            <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span>Hi, I'm Ichwan 👋</span>
            </h1>

            <p className="inline-block max-w-[600px] md:text-xl">
              UI/UX Designer, software engineer
            </p>
          </div>

          {/* Foto kanan */}
          <div>
            <div className="size-28 rounded-full overflow-hidden">
              <img
                src={Foto}
                alt="Mohammad Ichwan Al Ghifari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-[40px]">
        {/* Judul */}
        <h2 className="text-xl font-bold text-primary">About</h2>

        {/* Isi konten */}
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert ">
          <p>
            I'm passionate about coding and design, with a deep love for
            painting and drawing as my creative hobbies. Currently, I'm working
            on two personal projects:{" "}
            <a
              href="https://github.com/wanziee/ZielyApp"
              className="text-primary underline font-semibold"
            >
              GameLoad
            </a>
            , a website for game top-ups, and{" "}
            <a
              href="https://github.com/wanziee/ZielyApp"
              className="text-primary underline font-semibold"
            >
              Quizzie
            </a>
            , a fun and educational quiz app.
          </p>
        </div>
      </section>

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

      <section id="education" className="mt-[40px]">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-primary">Education</h2>
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
            <div className="inline-block rounded-lg bg-primary text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Checkout my latest work!
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Half of these are still under construction. The other half?
              They've magically disappeared into the land of private repos 🧙‍♂️✨
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-secondary hover:shadow-lg transition-all duration-300 ease-out h-full">
              <a
                href="https://github.com/wanziee/GameLoad"
                className="block cursor-pointer"
              >
                <img src={GameloadProject} alt="gameload" />
              </a>
              <div className="flex flex-col px-2">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight mt-1 text-base text-primary">
                    Gameload
                  </h3>
                  <time className="font-sans text-xs text-primary">
                    July 2024
                  </time>
                  <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                    <p>
                      An open source REST API that provides access to Indonesian
                      province, regencies, districts, and villages data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
                <div className="mt-2 flex flex-wrap gap-1">
                  <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primary hover:bg-secondary/80 px-1 py-0.5 text-[10px]">
                    Laravel
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primary hover:bg-secondary/80 px-1 py-0.5 text-[10px]">
                    Php
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-2 px-2 pb-2">
                <div className="flex flex-row flex-wrap items-start gap-1">
                  <a href="">
                    <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe-icon lucide-globe"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <p>Website</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <StickyBottomNavigationBar />
      </div>
    </div>
  );
};

export default HomePage;
