import React from "react";
import { Zoom } from "react-awesome-reveal";
const About = () => {
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
      iconUrl: "https://img.icons8.com/ultraviolet/48/000000/react--v1.png",
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
      iconUrl: "https://img.icons8.com/material-rounded/48/000000/github.png",
      label: "Github",
    },
    {
      iconUrl: "https://img.icons8.com/color/48/000000/redux.png",
      label: "Redux",
    },
    {
      iconUrl: "https://img.icons8.com/officel/48/000000/php-logo.png",
      label: "PHP",
    },
    {
      iconUrl: "https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png",
      label: "Photoshop",
    },
  ];
  return (
    <section id="about-section" className="py-8 text-center bg-red-600">
      <Zoom cascade duration={300}>
        <div className="mb-4 text-white ">
          <h1 className="mb-4 font-mono text-2xl font-semibold md:-ml-20 md:text-4xl">
            About Me
          </h1>

          <p className="max-w-[600px] px-4 md:px-0 text-myWhite-1 text-justify mx-auto">
            My name is
            <span className="font-semibold text-white"> Gener Maloto</span> ,
            looking for a position to kickstart my career in the field of
            <span className="font-semibold text-white">
              {" "}
              Front-End Developer
            </span>
            . Have a Degree of Bachelor of Science in Information Technology
            from Laguna State Polytechnic University. My goal is to become
            associated with a company where I can utilize my skills and gain
            further experience while enhancing the company’s productivity and
            reputation.
          </p>
        </div>

        <div className="container flex mt-8 justify-center mx-auto gap-4 max-w-[600px] flex-wrap">
          <Zoom cascade duration={150} delay={300}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-[10px] w-[70px] h-[70px] hover:shadow-2xl hover:scale-110 flex flex-col items-center justify-center md:w-[90px] md:h-[90px]  bg-red-700 rounded"
              >
                <img
                  src={tech.iconUrl}
                  alt=""
                  className=" drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] w-[35px] md:w-auto"
                />
                <p className="text-white">{tech.label}</p>
              </div>
            ))}
          </Zoom>
        </div>
      </Zoom>
    </section>
  );
};

export default About;
