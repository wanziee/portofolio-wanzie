const AboutSection = () => {
  return (
    <section id="about" className="mt-[40px]">
      {/* Judul */}
      <h2 className="text-xl font-bold text-primary">About</h2>

      {/* Isi konten */}
      <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert ">
        <p>
          I'm passionate about coding and design, with a deep love for painting
          and drawing as my creative hobbies. Currently, I'm working on two
          personal projects:{" "}
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
          , a fun and educational quiz app.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
