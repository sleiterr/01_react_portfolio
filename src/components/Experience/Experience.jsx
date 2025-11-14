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
      <div className="px-4 py-[3.7rem] md:py-[8rem] mx-auto md:max-w-7xl">
        <div className="grid cols-1 gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="">
            <h2 className="flex items-center justify-start gap-4 font-code text-heading-primary text-4xl md:text-5xl tracking-wide mb-4 md:mb-10">
              <div className="relative w-22 h-22 flex items-center justify-center border-2 border-white rounded-full">
                <GiGraduateCap className="w-12 h-12 text-white" />
              </div>
              Education
            </h2>
            <AccordionStudy educationData={educationData} />
          </div>
          <div className="">
            <h2 className="flex items-center justify-start gap-4 font-code text-heading-primary text-4xl md:text-5xl tracking-wide mb-4 md:mb-10">
              <div className="relative w-22 h-22 flex items-center justify-center border-2 border-white rounded-full">
                <FaAward className="w-12 h-12 text-white" />
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
