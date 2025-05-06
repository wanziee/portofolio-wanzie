import { useState } from "react";

type ProjectCardProps = {
  title: string;
  dates: string;
  description: string;
  technologies?: readonly string[];
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
};

const ProjectCard = ({
  title,
  dates,
  description,
  technologies,
  image,
  links,
}: ProjectCardProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-secondary hover:shadow-lg transition-all duration-300 ease-out h-full">
      <div
        className="block cursor-pointer"
        onClick={() => setIsImageOpen(true)}
      >
        <img src={image} alt="gameload" />
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
            src={image}
            alt="gameload large"
            className="max-h-[70vh] max-w-[70vw] rounded-xl shadow-lg"
          />
        </div>
      )}

      <div className="flex flex-col px-2">
        <div className="space-y-1">
          <h3 className="font-semibold tracking-tight mt-1 text-base text-primary">
            {title}
          </h3>
          <time className="font-sans text-xs text-primary">{dates}</time>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {technologies?.map((technologie, idx) => (
            <div
              key={idx}
              className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primary hover:bg-secondary/80 px-1 py-0.5 text-[10px]"
            >
              {technologie}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center pt-2 px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <a key={idx} href={link.href}>
                <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-background shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  <p>{link.type}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
