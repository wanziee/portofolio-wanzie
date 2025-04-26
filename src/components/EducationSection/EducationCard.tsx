import { useState } from "react";

type EducationCardProps = {
  logo: string;
  institution: string;
  certificate: string;
  date: string;
  description: string;
};

const EducationCard = ({
  logo,
  institution,
  certificate,
  date,
  description,
}: EducationCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = (e: React.MouseEvent) => {
    e.preventDefault(); // biar gak langsung ke link
    setExpanded((prev) => !prev);
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="block transition group cursor-pointer"
      onClick={toggleDescription}
    >
      <div className="flex items-start">
        <div className="flex-none">
          <span className="relative flex shrink-0 overflow-hidden rounded-full border border-accent size-12 m-auto bg-muted-background dark:bg-foreground">
            <img
              src={logo}
              alt={`${institution} logo`}
              className="aspect-square h-full w-full object-contain"
            />
          </span>
        </div>

        <div className="flex-grow ml-4 items-start flex-col group">
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm text-primary">
                {institution}
                <span className="inline-flex gap-x-1"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-right-icon lucide-chevron-right ml-1 transform opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0 ${
                    expanded ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </h3>
              <span className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {date}
              </span>
            </div>
            <div className="font-sans text-xs text-primary">{certificate}</div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out text-primary ${
              expanded ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
            } text-xs sm:text-sm`}
          >
            {description}
          </div>
        </div>
      </div>
    </a>
  );
};
export default EducationCard;
