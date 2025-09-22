import Foto from "../../assets/foto1.jpg";
import BlurFade from "../../magicui/blur-fade";
import BlurFadeText from "../../magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="flex justify-between items-start max-w-6xl mx-auto text-primary">
        {/* Teks kiri */}
        <div className="flex-1 space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text={`Hi, I'm ${"Ichwan".split(" ")[0]} 👋`}
          />
          <BlurFadeText
            className="max-w-[600px] md:text-xl"
            delay={BLUR_FADE_DELAY}
            text=" UI/UX Designer, Software Engineer"
          />
        </div>

        {/* Foto kanan */}
        <div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="size-28 rounded-full overflow-hidden">
              <img
                alt="ichwan"
                src={Foto}
                className="w-full h-full object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
