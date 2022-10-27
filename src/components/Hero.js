import React from "react";
import profile from "../assets/profile.jpg";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="container text-black-1 mx-auto justify-center items-center flex md:flex-row flex-col-reverse w-screen mb-8 md:mb-0">
      <div className="md:w-1/2 text-center">
        <h1 className="md:-ml-40 -ml-20 text-4xl font-mono font-semibold md:text-6xl">
          Gener
        </h1>
        <h1 className="md:ml-40 ml-20 text-4xl font-mono font-semibold md:text-6xl">
          Maloto
        </h1>
        <p className="text-xl text-black-2 ">Aspiring Front-End Developer</p>
        <div className="flex text-xl md:text-3xl justify-center gap-4 mt-4 mb-8">
          <AiFillGithub className="cursor-pointer hover:text-red-600" />
          <AiFillFacebook className="cursor-pointer hover:text-red-600" />
          <AiFillLinkedin className="cursor-pointer hover:text-red-600" />
        </div>
        <button className="px-6 py-3 text-xl font-semibold text-white bg-red-600 hover:bg-red-700">
          View Projects
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          src={profile}
          alt="profile"
          id="profile"
          className="h-[300px] md:h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
