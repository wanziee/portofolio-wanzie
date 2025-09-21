import BlurFade from "../../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;
const AboutSection = () => {
  return (
    <section id="about" className="mt-[40px]">
      {/* Judul */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold text-primary">About</h2>
      </BlurFade>

      {/* Isi konten */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert ">
          <p>
            {/* I'm passionate about coding and design, with a deep love for
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
              href="https://github.com/wanziee/Quizie"
              className="text-primary underline font-semibold"
            >
              Quizzie
            </a>
            , a fun and educational quiz app. */}

            I'm passionate about coding, design, and art. Painting and drawing fuel my creativity, while coding lets me bring ideas to life. At the moment, I’m focusing on becoming an iOS developer, sharpening my skills to create apps that are both functional and beautifully designed.
          </p>
        </div>
      </BlurFade>
    </section>
  );
};

export default AboutSection;
