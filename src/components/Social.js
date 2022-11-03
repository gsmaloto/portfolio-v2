import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const Social = ({ footer }) => {
  return (
    <div
      className={`flex justify-center mt-4 mb-8  ${
        footer ? "text-4xl gap-8 text-white" : "text-xl md:text-3xl gap-4 "
      }`}
    >
      <AiFillGithub className="cursor-pointer hover:text-red-600" />
      <AiFillFacebook className="cursor-pointer hover:text-red-600" />
      <AiFillLinkedin className="cursor-pointer hover:text-red-600" />
    </div>
  );
};

export default Social;
