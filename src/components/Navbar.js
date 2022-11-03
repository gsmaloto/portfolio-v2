import React from "react";
import { MdEmail, MdModeNight, MdWork } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { GrMenu } from "react-icons/gr";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
const Navbar = ({ setDarkMode, darkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  const navLinks = [
    {
      icon: <MdWork />,
      label: "Projects",
    },
    {
      icon: <RiNewspaperFill />,
      label: "Resume",
    },
    {
      icon: <SiAboutdotme />,
      label: "About",
    },
  ];

  const [bg, setBg] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setBg(true);
    } else {
      setBg(false);
    }
  });
  return (
    <Slide
      direction="down"
      duration={1000}
      triggerOnce
      className={`sticky top-0 z-[100] transition ease-in-out duration-800 ${
        bg ? "bg-red-600 text-white shadow-2xl" : "bg-transparent text-black-1"
      }`}
    >
      <nav>
        <div
          className={`flex justify-between text-md  container mx-auto h-[60px] px-2 md:px-0`}
        >
          <div className="flex items-center">
            <h3 className="pr-2 border-r-2 md:mr-16">Gs</h3>
            {/* <div className="flex items-center gap-2 pr-2 mx-1 border-r-2 md:mr-16">
              <MdEmail />
              <span className="">genermaloto@gmail.com</span>
            </div> */}
            <div
              className="p-1 rounded-full cursor-pointer hover:bg-gray-200"
              onClick={toggleDarkMode}
            >
              <MdModeNight />
            </div>
          </div>
          <div className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="items-center hidden gap-2 md:flex">
                <h4 className="flex items-center gap-2 px-2 py-1 capitalize origin-left hover:bg-gray-200">
                  {link.icon} {link.label}
                </h4>
              </div>
            ))}
            <GrMenu className={`md:hidden text-green-400 bg-slate-400`} />
          </div>
        </div>
      </nav>
    </Slide>
  );
};

export default Navbar;
