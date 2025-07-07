import React from "react";
import s from "./HeroSection.module.css";
import heroBg from "../../assets/img/hero-design---Copy-1.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-no-repeat bg-center "
      id="#"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        aspectRatio: "1920 / 1200",
      }}
    >
      <div className={`${s.heroConteiner} container`}>
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>Hi, I'm Oleg.</h1>
          <h3 className={s.heroSubtitle}>
            I am <span className="text-heading-accent">Web Developer</span>
          </h3>
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
