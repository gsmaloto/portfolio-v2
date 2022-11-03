import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-[#3E0505] text-center py-4">
      <Social footer />
      <div className="mx-auto flex justify-center gap-12 mb-12 text-xl max-w-[400px] border-red-600 py-4  text-myWhite-1 border-y-2">
        <p className="hover:text-white">About</p>
        <p className="hover:text-white">Projects</p>
        <p className="hover:text-white">Contact</p>
      </div>
      <div className="text-myWhite-1">
        <p>Gener Maloto © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
