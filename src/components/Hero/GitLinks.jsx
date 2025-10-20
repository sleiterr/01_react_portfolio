import React from "react";
import { FaGithub } from "react-icons/fa";
// import { GoArrowRight } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";

export const GitLinks = () => {
  return (
    <>
      <div className="absolute bottom-3 right-5 sm:bottom-12 md:end-25 md:bottom-15">
        <a
          href="https://github.com/sleiterr"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex gap-4 font-normal text-base md:text-xl items-center cursor-pointer"
        >
          <FaGithub className="text-white w-[42px] h-[42px] transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]" />

          <p className="relative font-code text-2xl md:text-3xl text-white tracking-wide m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8] ">
            View GitHub
          </p>
          <BsArrowLeft className="hidden md:block w-6 h-6 text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8] rotate-180" />
          <span className="absolute left-0 -bottom-4 w-0 h-[2px] bg-[#1ed1a8] transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
      </div>
    </>
  );
};
