import { useState } from "react";
import GameloadProject from "../../assets/gameload_project.png";

const ProjectCard = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
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
            Half of these are still under construction. The other half? They've
            magically disappeared into the land of private repos 🧙‍♂️✨
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-secondary hover:shadow-lg transition-all duration-300 ease-out h-full">
            <div
              className="block cursor-pointer"
              onClick={() => setIsImageOpen(true)}
            >
              <img src={GameloadProject} alt="gameload" />
            </div>
            {isImageOpen && (
              <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-999">
                {/* Tombol Kembali */}
                <button
                  onClick={() => setIsImageOpen(false)}
                  className="absolute top-25 right-50 text-white text-2xl font-bold hover:text-red-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x-icon lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <img
                  src={GameloadProject}
                  alt="gameload large"
                  className="max-h-[70vh] max-w-[70vw] rounded-xl shadow-lg"
                />
              </div>
            )}

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
                    Gameload is a fast and secure game top-up website. Choose
                    your game, enter your ID, and get your items instantly.
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
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primary hover:bg-secondary/80 px-1 py-0.5 text-[10px]">
                  Midtrans
                </div>
              </div>
            </div>
            <div className="flex items-center pt-2 px-2 pb-2">
              <div className="flex flex-row flex-wrap items-start gap-1">
                {/* <a href="">
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-background shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
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
                </a> */}
                <a href="">
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-background shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
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
                    <p>Github</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
