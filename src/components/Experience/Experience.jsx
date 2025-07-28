import React from "react";
import Accordion from "./accordion";
import accordionData from "../../Data/accordionData.json";

const Experience = () => {
  return (
    <section className="">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div className="grid grid-cols-2 gap-5 items-start">
          <div className="self-start flex flex-col justify-center">
            <h2 className="font-code text-heading-primary text-5xl tracking-wide mb-4">
              Experience
            </h2>
            <p className="font-light text-xl text-content tracking-wider leading-[1.6em]">
              At this stage of my college studies, i am gaining experience in
              creating web content, including both single-page landing pages and
              large-scale web projects with working functions. When developing a
              website, I prioritize a mobile-first approach, ensuring
              responsiveness across different screen sizes by implementing at
              least one breakpoint. I am also learning to create a technical
              task and follow through with its implementation.. To add dynamism
              and interactivity to web pages, I use JavaScript. Determining the
              topic and main goal of the project, taking into account the needs
              of the customer and the characteristics of the target audience.
            </p>
          </div>
          <div className="">
            <Accordion accordion={accordionData} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
