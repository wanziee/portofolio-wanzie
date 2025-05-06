import BlurFade from "../../magicui/blur-fade";
import ProjectCard from "./ProjectCard";
import { DATA } from "../../data/resume";

const BLUR_FADE_DELAY = 0.04;
const ProjectSection = () => {
  return (
    <section id="projects" className="mt-[40px]">
      <div className="space-y-12 w-full py-10">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
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
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects?.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                dates={project.dates}
                description={project.description}
                links={project.links}
                technologies={project.technologies}
                image={project.image}
              />
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ProjectSection;
