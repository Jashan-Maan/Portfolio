import React from "react";
import Cards from "../components/Cards";

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
  return (
    <section
      id="Projects"
      // Add scroll-mt-20 here to offset for the sticky navbar
      // I also cleaned up the redundant px-20 class for you
      className="w-full min-h-screen scroll-mt-20 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-amber-200 mb-12 text-center drop-shadow-md">
        Projects
      </h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, title, image, link, github, tags }) => (
          <Cards
            key={id}
            title={title}
            src={image}
            link={link}
            github={github}
            tag={tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
