import React from "react";

const About = () => {
  const images = [
    { src: "/HTML.svg", alt: "HTML" },
    { src: "/CSS.svg", alt: "CSS" },
    { src: "/Bootstrap.svg", alt: "Bootstrap" },
    { src: "/JavaScript.svg", alt: "JavaScript" },
    { src: "/Git.svg", alt: "Git" },
    { src: "/Github-Dark.svg", alt: "Github" },
    { src: "/React-Dark.svg", alt: "React JS" },
    { src: "/TailwindCSS-Dark.svg", alt: "Tailwind Css" },
    { src: "./NodeJS-Dark.svg", alt: "NodeJs" },
    { src: "./ExpressJS-Dark.svg", alt: "ExpressJS" },
    { src: "./MongoDB.svg", alt: "MongoDB" },
    { src: "./MySQL-Dark.svg", alt: "MySQL" },
  ];
  return (
    <section
      id="About"
      className="px-16 w-full h-screen flex flex-col items-center justify-center mt-12 gap-10 text-white"
    >
      <div className="flex gap-4 items-center ">
        <img
          className="rounded-full h-56 w-56 bg-center bg-cover"
          src="./pfp.png"
          alt="profile picture"
        />
        <div className="flex flex-col gap-4 w-4/5">
          <h1 className="text-4xl font-bold text-center italic">Jashan Maan</h1>
          <p className="text-lg text-center">
            I'm a passionate Frontend Developer with expertise in React,
            JavaScript, and Tailwind CSS. I love building clean, responsive, and
            user-friendly web applications. I'm always eager to learn new
            things, contribute to open-source projects, and create innovative
            digital experiences. Let's connect and build something amazing
            together!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center mt-10">
        <h1 className="text-2xl font-bold italic">Skills</h1>
        <div className="flex gap-4 flex-wrap">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-2 text-center"
            >
              <img className="h-20 w-20" src={image.src} alt={image.alt}></img>
              <p className="text-xs">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold text-white hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:scale-95 transition-all duration-100 cursor-pointer mt-10">
          <a href="#Hero">Download Resume</a>
        </button>
      </div>
    </section>
  );
};

export default About;
