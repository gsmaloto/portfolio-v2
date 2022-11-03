import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const contact = [
    { icon: <IoMdCall />, title: "Contact Number", sub: "(+63) 905 849 1348" },
    { icon: <MdEmail />, title: "Email", sub: "genermaloto@gmail.com" },
    {
      icon: <MdLocationPin />,
      title: "location",
      sub: "Santa Cruz, Laguna",
    },
  ];
  return (
    <section className="py-4 text-[#000] ">
      <div className="max-w-[1000px] mx-auto px-4 md:px-0">
        <h1 className="mb-4 font-mono text-2xl font-semibold text-center md:-ml-20 md:text-4xl text-[#000]">
          Contact Me
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          {contact.map((item, index) => (
            <div
              className="flex items-center w-full gap-2 p-2 bg-gray-100 md:p-2"
              key={index}
            >
              <div className="text-2xl text-red-600 md:text-3xl">
                {item.icon}
              </div>
              <div>
                <h6 className="font-semibold capitalize text-md md:text-xl text-[#000]">
                  {item.title}
                </h6>
                <p className="text-sm md:text-md text-black-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-2 mt-8">
          <form className="max-w-[600px] mx-auto px-4">
            <div className="flex flex-col gap-6 md:flex-row md:mb-2">
              <div className="flex flex-col w-full gap-1">
                <label className="text-xl" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="px-4 py-2 bg-gray-100 rounded-lg outline-none outline-red-600 placeholder:text-black-1 focus:outline-4"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label className="text-xl" htmlFor="name">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-100 rounded-lg outline-none outline-red-600 placeholder:text-black-1 focus:outline-4"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <label className="text-xl" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                id="message"
                rows={5}
                placeholder="Enter your message . . ."
                className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none resize-none outline-red-600 placeholder:text-black-1 focus:outline-4"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4 text-white">
              <button className="flex items-center gap-4 px-6 py-3 text-xl font-semibold bg-red-600 hover:bg-red-500 text">
                Send <IoSend className="text-2xl text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
