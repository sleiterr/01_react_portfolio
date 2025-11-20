// Experience.jsx
import React from "react";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import AccordionPath from "./AccordionPath";
import AccordionStudy from "./AccordionStudy";
import experienceData from "../../Data/experienceData.json";
import educationData from "../../Data/educationData.json";
import clsx from "clsx";
import SplitText from "../animation/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

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
            <div
              className={clsx(
                "flex items-center justify-center gap-4",
                "mb-4 md:mb-6"
              )}
            >
              <GiGraduateCap className="lg:w-14 lg:h-14 md:w-10 md:h-10 text-white" />
              <SplitText
                tag="h2"
                text="My Projects"
                className={clsx(
                  "flex items-center justify-start gap-4",
                  "font-code font-bold text-heading-primary text-4xl md:text-6xl tracking-wide w-full text-left leading-[1.2]"
                )}
                delay={120}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            {/* <h2
              className={clsx(
                "flex items-center justify-start gap-4 mb-4 md:mb-10",
                "font-code font-bold text-heading-primary text-4xl md:text-6xl tracking-wide"
              )}
            >
              Education
            </h2> */}
            <AccordionStudy educationData={educationData} />
          </div>
          <div className="">
            <div
              className={clsx(
                "flex items-center justify-center gap-4",
                "mb-4 md:mb-6"
              )}
            >
              <FaAward className="lg:w-12 lg:h-12 md:w-10 md:h-10 text-white" />
              <SplitText
                tag="h2"
                text=" Experience"
                className={clsx(
                  "flex items-center justify-start gap-4",
                  "font-code font-bold text-heading-primary text-4xl md:text-6xl tracking-wide  w-full text-left leading-[1.2]"
                )}
                delay={250}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            {/* <h2
              className={clsx(
                "flex items-center justify-start gap-4 mb-4 md:mb-10",
                "font-code font-bold text-heading-primary text-4xl md:text-6xl tracking-wide"
              )}
            >
              Experience
            </h2> */}
            <AccordionPath experience={experienceData} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;

// border-2 border-white rounded-full
