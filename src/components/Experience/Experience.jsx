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
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div className="grid grid-cols-2 gap-12 items-start">
          <div className="">
            <h2 className="flex items-center justify-start gap-4 font-code text-heading-primary text-5xl tracking-wide mb-10">
              <GiGraduateCap />
              Education
            </h2>
            <AccordionStudy educationData={educationData} />
          </div>
          <div className="">
            <h2 className="flex items-center justify-start gap-4 font-code text-heading-primary text-5xl tracking-wide mb-10">
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
