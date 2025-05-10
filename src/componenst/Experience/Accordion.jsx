import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import s from "./Experience.module.css";

const Accordion = ({ accordion = [] }) => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };
  return (
    <div>
      {accordion.map(({ id, title, subtitle, list }, index) => {
        const accordionIndex = (index + 1).toString().padStart(2, "0");
        const isActive = clicked === index;
        return (
          <div
            className={`${s.accordion} ${isActive ? s.active : ""}`}
            onClick={() => handleToggle(index)}
            key={id}
          >
            <div className={s.accordionIcon}>
              <IoIosArrowForward className={s.iconCheveron} />
            </div>

            <div className={s.contentContainer}>
              <p className={s.numTitle}>{accordionIndex}</p>
              <h4 className={s.accTitle}>{title}</h4>
            </div>

            <div className={`${s.panel} ${isActive ? s.active : ""}`}>
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
  );
};

export default Accordion;
