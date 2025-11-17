// Experience.jsx
import React from "react";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import AccordionPath from "./AccordionPath";
import AccordionStudy from "./AccordionStudy";
import experienceData from "../../Data/experienceData.json";
import educationData from "../../Data/educationData.json";
import clsx from "clsx";

const Experience = () => {
  return (
    <section className="" id="experience">
      <div className="px-4 py-[3.7rem] md:py-[8rem] mx-auto md:max-w-7xl">
        <div
          className={clsx(
            "grid cols-1 gap-4",
            "lg:grid-cols-2 lg:gap-12 lg:place-items-start",
            "md:place-items-center md:gap-8"
          )}
        >
          <div className="">
            <h2
              className={clsx(
                "flex items-center justify-start gap-4 mb-4 md:mb-10",
                "font-code text-heading-primary text-4xl md:text-5xl tracking-wide"
              )}
            >
              <div
                className={clsx(
                  "relative flex items-center justify-center border-2 border-white rounded-full",
                  "lg:w-22 lg:h-22 md:w-18 md:h-18"
                )}
              >
                <GiGraduateCap className="lg:w-14 lg:h-14 md:w-10 md:h-10 text-white" />
              </div>
              Education
            </h2>
            <AccordionStudy educationData={educationData} />
          </div>
          <div className="">
            <h2
              className={clsx(
                "flex items-center justify-start gap-4 mb-4 md:mb-10",
                "font-code text-heading-primary text-4xl md:text-5xl tracking-wide"
              )}
            >
              <div
                className={clsx(
                  "relative flex items-center justify-center border-2 border-white rounded-full",
                  "lg:w-22 lg:h-22 md:w-18 md:h-18"
                )}
              >
                <FaAward className="lg:w-12 lg:h-12 md:w-10 md:h-10 text-white" />
              </div>
              Experience
            </h2>
            <AccordionPath experience={experienceData} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
