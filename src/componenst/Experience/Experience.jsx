import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import s from "./Experience.module.css";

const Experience = ({ accordion }) => {
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
        <div>
          {accordion.map(({ id, title, subtitle, list }, index) => {
            const accordionIndex = (index + 1).toString().padStart(2, "0");
            return (
              <div className={s.accordion} key={id}>
                <div className={s.accordionIcon}>
                  <IoIosArrowForward className={s.iconCheveron} />
                </div>

                <div className={s.contentContainer}>
                  <p className={s.numTitle}>{accordionIndex}</p>
                  <h4 className={s.accTitle}>{title}</h4>
                </div>

                <div className={s.panel}>
                  <p className={s.accContent}>{subtitle}</p>
                  <ul className={s.accordionList}>
                    {list.map((li, i) => (
                      <li key={i} className={s.accordionItem}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
