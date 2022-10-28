import React from "react";
import { MdEmail, MdModeNight, MdWork } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { GrMenu } from "react-icons/gr";
import { Slide } from "react-awesome-reveal";
const Navbar = () => {
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

  return (
    <Slide direction="down" duration={1000}>
      <nav className="flex justify-between text-md container mx-auto h-[60px] px-2 md:px-0 text-black-1">
        <div className="flex items-center">
          <h3 className="pr-2 border-r-2 md:mr-16">Gs</h3>
          <div className="flex items-center gap-2 pr-2 mx-1 border-r-2 md:mr-16">
            <MdEmail />
            <span className="">genermaloto@gmail.com</span>
          </div>
          <div className="p-1 rounded-full cursor-pointer hover:bg-gray-200">
            <MdModeNight />
          </div>
        </div>
        <div className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <div key={index} className="items-center hidden gap-2 md:flex">
              <h4 className="flex items-center gap-2 px-2 py-1 origin-left hover:bg-gray-200">
                {link.icon} {link.label}
              </h4>
            </div>
          ))}
          <GrMenu className="md:hidden" />
        </div>
      </nav>
    </Slide>
  );
};

export default Navbar;
