// Experience.jsx
import React from "react";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import AccordionPath from "./AccordionPath";
import AccordionStudy from "./AccordionStudy";
import experienceData from "../../Data/experienceData.json";
import educationData from "../../Data/educationData.json";

const Experience = () => {
  return (
    <section className="" id="experience">
      <div className="px-4 md:px-0 py-[8rem] mx-auto md:max-w-7xl">
        <div className="grid cols-1 md:grid-cols-2 gap-4 md:gap-12 items-start">
          <div className="">
            <h2 className="flex items-center justify-start gap-4 font-code text-heading-primary text-4xl md:text-5xl tracking-wide mb-8 md:mb-10">
              <GiGraduateCap />
              Education
            </h2>
            <AccordionStudy educationData={educationData} />
          </div>
          <div className="">
            <h2 className="flex items-center justify-start gap-4 font-code text-heading-primary text-4xl md:text-5xl tracking-wide mb-8 md:mb-10">
              <FaAward />
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
