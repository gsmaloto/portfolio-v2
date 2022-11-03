import React from "react";
import profile from "../assets/profile.jpg";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Fade, Zoom } from "react-awesome-reveal";
import Social from "./Social";

const Hero = () => {
  return (
    <div className="container relative flex -mt-[30px] md:mt-0 flex-col-reverse items-center justify-center w-screen h-[calc(100vh-60px)] mx-auto mb-8 text-black-1 md:flex-row md:mb-0">
      <div className="text-center md:w-1/2">
        <Zoom direction="left" cascade duration={800} triggerOnce>
          <div className="-mt-12 md:mt-0">
            <h1 className="-ml-20 font-mono text-4xl font-semibold md:-ml-40 md:text-6xl">
              Gener
            </h1>
            <h1 className="ml-20 font-mono text-4xl font-semibold md:ml-40 md:text-6xl">
              Maloto
            </h1>
          </div>
          <p className="text-xl text-black-2 ">Aspiring Front-End Developer</p>
          <div className="flex justify-center gap-4 mt-4 mb-8 text-xl md:text-3xl">
            <Social />
          </div>
          <button className="px-6 py-3 font-semibold text-white bg-red-600 md:text-xl hover:bg-red-700">
            <a href="#project-section">View Projects</a>
          </button>
        </Zoom>
      </div>
      <div className="w-auto md:w-1/2">
        <Zoom duration={800} delay={2000} triggerOnce>
          <img
            src={profile}
            alt="profile"
            id="profile"
            className="h-[300px] md:h-auto object-cover"
          />
        </Zoom>
      </div>
      <Fade
        delay={2000}
        className="absolute -bottom-[20px] md:bottom-0 text-3xl text-center text-red-600 md:text-5xl "
      >
        <HiChevronDoubleDown className="w-full mx-auto animate-bounce" />
      </Fade>
    </div>
  );
};

export default Hero;
