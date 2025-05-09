import React from "react";
import s from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={s.sectionHero} id="#">
      <div className={`${s.heroConteiner} container`}>
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>Hi, I'm Oleg.</h1>
          <h3 className={s.heroSubtitle}>I am a Web Developer</h3>
          <p className={s.heroContext}>
            I am currently studying web development at Media College Denmark,
            where I am building skills in both web development and UI/UX design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
