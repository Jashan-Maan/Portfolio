import React, { useEffect, useRef } from "react";
import Cards from "../components/Cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "News App",
    description:
      "A dynamic news application built with React, featuring real-time updates and categorized news feeds.",
    image: "/news.png",
    link: "#",
    github: "https://github.com/Jashan-Maan/News-App",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A simple and intuitive todo application built with React, allowing users to add, delete, and mark tasks as complete.",
    image: "/todo.png",
    link: "#",
    github: "https://github.com/Jashan-Maan/To-Do-List",
    tags: ["React", "TailwindCss"],
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A real-time weather application built with HTML, CSS, and JavaScript, integrating a third-party API to fetch and display current weather conditions.",
    image: "/weather.png",
    link: "#",
    github: "https://github.com/Jashan-Maan/Weather-App",
    tags: ["HTML", "CSS", "JS", "API", "Responsive"],
  },
  {
    id: 4,
    title: "Text Editor",
    description:
      "A basic text editor built with React, offering features like text manipulation and formatting.",
    image: "/editor.png",
    link: "#",
    github: "https://github.com/Jashan-Maan/Text-Editor",
    tags: ["React", "TailwindCss"],
  },
  {
    id: 5,
    title: "Rock Paper Scissor",
    description:
      "A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript, offering an interactive and engaging user experience.",
    image: "/game.png",
    link: "#",
    github: "https://github.com/Jashan-Maan/Rock-Paper-Scissor",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 6,
    title: "Employee Management System",
    description:
      "A comprehensive employee management system built with React, featuring CRUD operations, context API for state management, and local storage for data persistence.",
    image: "/ems.png",
    link: "#",
    github: "https://github.com/Jashan-Maan/EMS",
    tags: ["React", "TailwindCss", "Context API", "Local Storage"],
  },
];

const Projects = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const totalScrollWidth =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    tl.to(scrollContainer, {
      scrollLeft: totalScrollWidth,
      duration: 10,
    });

    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="Projects"
      className="w-full h-screen mt-12 px-16 flex flex-col items-center justify-center gap-7"
    >
      <h2 className="text-4xl font-bold italic text-amber-200">Projects</h2>
      <div
        ref={scrollContainerRef}
        id="scroll-bar"
        className="flex h-3/5 justify-start w-full gap-6  items-center overflow-auto px-2 py-4 scroll-auto"
      >
        {projects.map(
          ({ id, title, description, image, link, github, tags }) => (
            <Cards
              key={id}
              title={title}
              description={description}
              src={image}
              link={link}
              github={github}
              tag={tags}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
