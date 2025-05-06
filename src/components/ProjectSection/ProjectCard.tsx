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
  video?: string;
};

const ProjectCard = ({
  title,
  dates,
  description,
  technologies,
  image,
  links,
  video,
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-secondary hover:shadow-lg transition-all duration-300 ease-out h-full">
      <div className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </div>

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
