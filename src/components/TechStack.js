import React from "react";

const TechStack = () => {
  const techStack = [
    {
      iconUrl: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      label: "HTML",
    },
    {
      iconUrl: "https://img.icons8.com/color/48/000000/css3.png",
      label: "CSS",
    },
    {
      iconUrl: "https://img.icons8.com/fluency/48/000000/javascript.png",
      label: "JavaScript",
    },
    {
      iconUrl: "https://img.icons8.com/fluency/48/000000/tailwind_css.png",
      label: "Tailwind",
    },
    {
      iconUrl: "https://img.icons8.com/ultraviolet/40/000000/react--v1.png",
      label: "ReactJS",
    },
    {
      iconUrl: "https://img.icons8.com/color/48/228BE6/firebase.png",
      label: "Firebase",
    },
    {
      iconUrl: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      label: "MYSQL",
    },
    {
      iconUrl: "https://img.icons8.com/color/48/000000/git.png",
      label: "Git",
    },
    {
      iconUrl: "https://img.icons8.com/ios-glyphs/30/000000/github.png",
      label: "Github",
    },
  ];
  return (
    <div>
      <div className="container mx-auto flex">
        <h4>Tech Stack</h4>
        {techStack.map((tech, index) => (
          <div key={index}>
            <img src={tech.iconUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
