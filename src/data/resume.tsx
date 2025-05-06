// import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.jpg";
import Oracle from "../assets/oracle.jpeg";
import Bsi from "../assets/logo-bsi.png";
import Telkom from "../assets/telkom.jpg";
import Video from "../assets/videoProject.mp4";

export const DATA = {
  projects: [
    {
      title: "Gameload",
      dates: "July 2024",
      description:
        "Gameload is a fast and secure game top-up website. Choose your game, enter your ID, and get your items instantly.",
      technologies: ["Laravel", "Php", "API Midtrans"],
      links: [
        {
          type: "Github",
          href: "https://github.com/wanziee/GameLoad",
          icon: (
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
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          ),
        },
      ],
      image: "",
      video: Video,
    },
    {
      title: "Quizie",
      dates: "Mei 2025 - Now",
      description:
        "A quiz app built with SwiftUI that fetches real-time questions from the Trivia API and tracks scores.",
      technologies: ["Swift", "SwiftUI", "Trivia API"],
      links: [
        {
          type: "Github",
          href: "https://github.com/wanziee/Quizie",
          icon: (
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
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          ),
        },
      ],
      image: Project2,
      video: "",
    },
  ],

  educations: [
    {
      logo: Oracle,
      institution: "Oracle Corporation",
      certificate: "Professional Certification",
      date: "Mar 2024 – Jun 2024",
      description:
        "I participated in the Oracle Data Modeler training program, where I learned how to design and manage database structures using Oracle's modeling tools. The program enhanced my understanding of relational databases, ER diagrams, and best practices in data architecture.",
      link: "https://drive.google.com/drive/folders/1ZfNZMADh17NjOdlq6MVx4sZrHtz1_gpY?usp=sharing",
    },
    {
      logo: Bsi,
      institution: "Bina Sarana Informatika University",
      certificate: "Student",
      date: "Oct 2023 – Now",
      description:
        "Pursuing a Bachelor's degree in Informatics with a focus on software development, UI/UX design, and digital product innovation. Actively engaging in academic and extracurricular activities to strengthen both technical and soft skills in preparation for a career in the tech industry.",
      link: "",
    },
  ],

  workExperiences: [
    {
      logo: Telkom,
      company: "PT.Telkom Indonesia",
      position: "IT Intern - Server Room Operations",
      date: "Sep 2022 – Oct 2022",
      description:
        "I interned at PT Telkom Indonesia in the server room, where I supported various technical tasks such as system monitoring, hardware setup, and troubleshooting. This experience gave me hands-on exposure to data center operations and helped me better understand IT infrastructure in a real-world environment.",
      link: "",
    },
  ],
};
