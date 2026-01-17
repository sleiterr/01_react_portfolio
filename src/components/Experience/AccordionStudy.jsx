import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import s from "./Experience.module.css";

const AccordionStudy = ({ educationPosts = [] }) => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };
  return (
    <div className="">
      {educationPosts.map(({ id, title, subtitle, year }, index) => {
        const accordionIndex = (index + 1).toString().padStart(2, "0");
        const isActive = clicked === index;

        return (
          <div
            className={clsx(
              s.accordion,
              "bg-black/40 relative cursor-pointer text-left border border-none transition-all duration-200 ease-in-out",
              "py-3 px-4 lg:p-4 mb-8",
              "max-w-full md:max-w-3xl md:w-full",
              "shadow-lg shadow-cyan-500/30",

              isActive ? s.active : "",
            )}
            onClick={() => handleToggle(index)}
            key={id}
          >
            {/* text-accordion-nr-default */}
            <div className="relative">
              <IoIosArrowForward
                className={clsx(
                  // 45px-Arrow size
                  "absolute right-0 top-1 md:-top-[2px] text-[2rem] md:text-[2.8rem] transition-transform duration-200 ease-in-out",
                  isActive
                    ? "rotate-90 text-cyan-400 transition-colors duration-300 ease-in-out"
                    : "text-white duration-600 ease-in-out",
                )}
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <p
                className={clsx(
                  "font-code font-normal text-3xl sm:text-4xl md:text-4xl tracking-wider",
                  isActive
                    ? "text-cyan-400 transition-colors duration-300 ease-in-out"
                    : "text-gray-600 duration-600 ease-in-out",
                )}
              >
                {accordionIndex}
              </p>
              <h4
                className={clsx(
                  "font-code font-medium text-lg sm:text-3xl md:text-3xl",
                  isActive
                    ? "text-cyan-400 transition-colors duration-300 ease-in-out"
                    : "text-white duration-600 ease-in-out",
                )}
              >
                {title}
              </h4>
            </div>

            <div
              className={clsx(
                "max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out ml-5 bg-transparent",
                isActive && "max-h-[500px] opacity-100",
              )}
            >
              <p className="font-light text-base text-accordion tracking-wide leading-[1.6em] p-0 py-4 md:p-6">
                <span className="font-normal text-lg text-green-400 pr-2">
                  {year}
                </span>
                {subtitle}
                {id === 1 && (
                  <a
                    href="/public/Doc/certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-cyan-400 underline hover:text-blue-500 transition-colors duration-300 ml-2"
                  >
                    View Сertificate
                  </a>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionStudy;
