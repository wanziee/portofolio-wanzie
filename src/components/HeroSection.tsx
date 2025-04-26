import Foto from "../assets/foto.jpeg";
const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
