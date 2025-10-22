import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import s from "./Experience.module.css";

const AccordExperience = ({ educationData = [] }) => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };
  return (
    <div className="">
      {educationData.map(({ id, title, subtitle }, index) => {
        const accordionIndex = (index + 1).toString().padStart(2, "0");
        const isActive = clicked === index;

        return (
          <div
            className={clsx(
              s.accordion,
              "bg-white relative cursor-pointer text-left border border-none transition-all duration-200 ease-in-out py-3 px-4 lg:p-4",
              "max-w-full md:max-w-3xl md:w-full",

              isActive ? s.active : ""
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
                    ? "rotate-90 text-accordion-nr-active transition-colors duration-300 ease-in-out"
                    : "text-neutral-800 duration-600 ease-in-out"
                )}
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <p
                className={clsx(
                  "font-code font-normal text-3xl sm:text-4xl md:text-4xl tracking-wider",
                  isActive
                    ? "text-accordion-nr-active transition-colors duration-300 ease-in-out"
                    : "text-accordion-nr-default duration-600 ease-in-out"
                )}
              >
                {accordionIndex}
              </p>
              <h4
                className={clsx(
                  "font-code font-medium text-lg sm:text-3xl md:text-3xl",
                  isActive
                    ? "text-accordion-title-active transition-colors duration-300 ease-in-out"
                    : "text-accordion-title-default duration-600 ease-in-out"
                )}
              >
                {title}
              </h4>
            </div>

            <div className={`${s.panel} ${isActive ? s.active : ""}`}>
              <p className="text-base text-accordion tracking-wider leading-[1.6em] p-0 py-4 md:p-6">
                {subtitle}
              </p>
              {/* <ul className={s.accordionList}>
                {list.map((li, i) => (
                  <li key={i} className={s.accordionItem}>
                    {li}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordExperience;
