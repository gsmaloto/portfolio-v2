import React from "react";

const About = () => {
  return (
    <div className="bg-red-600 py-8 text-center">
      <div className=" text-white mb-4">
        <h1 className="md:-ml-20 -ml-10 text-2xl font-mono font-semibold md:text-4xl">
          About Me
        </h1>
      </div>
      <p className="max-w-[600px] px-4 md:px-0 text-myWhite-1 text-justify mx-auto">
        My name is{" "}
        <span className="font-semibold text-white">Gener Maloto</span> , looking
        for a position to kickstart my career in the field of
        <span className="font-semibold text-white"> Front-End Developer</span>.
        Have a Degree of Bachelor of Science in Information Technology from
        Laguna State Polytechnic University. My goal is to become associated
        with a company where I can utilize my skills and gain further experience
        while enhancing the company’s productivity and reputation.
      </p>
    </div>
  );
};

export default About;
