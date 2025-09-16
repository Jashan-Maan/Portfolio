import React from "react";

const About = () => {
  const skills = [
    { src: "/HTML.svg", alt: "HTML" },
    { src: "/CSS.svg", alt: "CSS" },
    { src: "/Bootstrap.svg", alt: "Bootstrap" },
    { src: "/JavaScript.svg", alt: "JavaScript" },
    { src: "/Git.svg", alt: "Git" },
    { src: "/Github-Dark.svg", alt: "Github" },
    { src: "/React-Dark.svg", alt: "React JS" },
    { src: "/TailwindCSS-Dark.svg", alt: "Tailwind CSS" },
    { src: "/NodeJS-Dark.svg", alt: "Node.js" },
    { src: "/ExpressJS-Dark.svg", alt: "Express.js" },
    { src: "/MongoDB.svg", alt: "MongoDB" },
    { src: "/MySQL-Dark.svg", alt: "MySQL" },
  ];

  return (
    <section
      id="About"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 sm:px-10 lg:px-16 text-white"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center drop-shadow-md">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl">
        <img
          className="rounded-full h-48 w-48 md:h-56 md:w-56 object-cover flex-shrink-0 shadow-lg shadow-amber-400/20"
          src="./pfp.png"
          alt="Jashan Maan's profile picture"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center md:text-left text-amber-200">
            Jashan Maan
          </h2>
          <p className="text-lg text-center md:text-left text-gray-300">
            I'm a passionate Full Stack Developer with expertise in the MERN
            stack. I love building clean, responsive, and user-friendly web
            applications. I'm always eager to learn new things, contribute to
            open-source projects, and create innovative digital experiences.
            Let's connect and build something amazing together!
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
          {skills.map((skill) => (
            <div
              key={skill.alt}
              className="group flex flex-col items-center justify-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1"
              title={skill.alt}
            >
              <img
                className="h-14 w-14 sm:h-16 sm:w-16"
                src={skill.src}
                alt={skill.alt}
              />
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="/path/to/your/resume.pdf"
        download="Jashan_Maan_Resume.pdf"
        className="mt-16 shadow-lg transform transition-all duration-300 bg-blue-600 px-7 py-3 rounded-full text-lg font-semibold text-white hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/50"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;
