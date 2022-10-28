import React from "react";

const ProjectCard = () => {
  const projects = [
    {
      image:
        "data:image/jpeg;base64,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",
      title: "my sample titile",
      details: "Lorem ipsum",
      tech: ["React JS", "HTML", "Tailwind CSS", "react-awesome-reveal"],
    },
    {
      image:
        "data:image/jpeg;base64,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",
      title: "my sample titile",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate consequatur alias ut aut iusto, nobis, dolores facere voluptate aliquid numquam fugiat. Pariatur dolor minima veniam rerum nostrum libero adipisci voluptas optio ipsa. Similique, beatae.",
      tech: [
        "React JS",
        "HTML",
        "Tailwind CSS",
        "react-awesome-reveal",
        "React JS",
        "HTML",
        "Tailwind CSS",
        "react-awesome-reveal",
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 pb-4 overflow-hidden text-center bg-gray-200 rounded-lg md:flex-row md:text-left md:pb-0 md:w-full"
        >
          <img src={project.image} alt="" className="object-contain md:w-1/2" />
          <div className="container mx-auto md:w-1/2 md:py-4">
            <h4 className="mt-2 text-xl font-semibold md:text-4xl">
              {project.title}
            </h4>
            <p className="mx-4 mt-4 mb-8 text-sm text-left md:text-md">
              {project.details}
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-white md:justify-start">
              {project.tech.map((item, index) => (
                <p
                  key={index}
                  className="px-2 py-1 text-sm bg-red-600 rounded-lg md:text-md"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
