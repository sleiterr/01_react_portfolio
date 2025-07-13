import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import s from "./Experience.module.css";

const Accordion = ({ accordion = [] }) => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };
  return (
    <div className="">
      {accordion.map(({ id, title, subtitle }, index) => {
        const accordionIndex = (index + 1).toString().padStart(2, "0");
        const isActive = clicked === index;

        return (
          <div
            className={clsx(
              s.accordion,
              "bg-white relative cursor-pointer text-left border border-none transition-all duration-200 ease-in-out",
              isActive ? s.active : ""
            )}
            onClick={() => handleToggle(index)}
            key={id}
          >
            <div className="relative">
              <IoIosArrowForward
                className={clsx(
                  "absolute right-0 -top-[2px] text-[45px] transition-transform duration-600 ease-in-out",
                  isActive
                    ? "rotate-90 text-accordion-nr-active transition-colors duration-200 ease-in-out"
                    : "text-accordion-nr-default duration-700 ease-in-out"
                )}
              />
            </div>

            <div className="flex items-center gap-4">
              <p
                className={clsx(
                  "font-code font-normal text-4xl tracking-wider",
                  isActive
                    ? "text-accordion-nr-active transition-colors duration-200 ease-in-out"
                    : "text-accordion-nr-default duration-700 ease-in-out"
                )}
              >
                {accordionIndex}
              </p>
              <h4
                className={clsx(
                  "font-code font-medium text-3xl",
                  isActive
                    ? "text-accordion-title-active transition-colors duration-300 ease-in-out"
                    : "text-accordion-title-default duration-700 ease-in-out"
                )}
              >
                {title}
              </h4>
            </div>

            <div className={`${s.panel} ${isActive ? s.active : ""}`}>
              <p className="text-base text-accordion tracking-wider leading-[1.6em] p-[24px]">
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

export default Accordion;
