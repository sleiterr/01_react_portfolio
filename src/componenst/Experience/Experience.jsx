import React from "react";
import Accordion from "./accordion";
import accordionData from "../../Data/accordionData.json";
import s from "./Experience.module.css";

const Experience = () => {
  return (
    <section>
      <div className={`${s.educContainer} container`}>
        <div>
          <h2 className={s.educTitle}>Education & Experience</h2>
          <p className={s.educSubtitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            dicta incidunt fuga repellat officia exercitationem asperiores
            laboriosam quae obcaecati porro eveniet id repudiandae possimus
            unde, perspiciatis error odio magnam ab?
          </p>
        </div>
        <Accordion accordion={accordionData} />
      </div>
    </section>
  );
};
export default Experience;
