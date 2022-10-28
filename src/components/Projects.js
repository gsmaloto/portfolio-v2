import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 font-mono text-2xl font-semibold text-center md:-ml-20 md:text-4xl">
        My Projects
      </h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
