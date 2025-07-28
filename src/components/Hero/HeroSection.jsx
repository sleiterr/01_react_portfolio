import React from "react";

import heroBg from "../../assets/img/hero-design---Copy-1.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-no-repeat bg-center "
      id="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute top-[50%] left-[100px] flex items-start justify-center">
        <div className="gtid:container flex flex-col items-start justify-center text-left">
          <div className="mb-10">
            <h1 className="font-code font-extrabold text-subheading text-7xl leading-[1.2em]">
              Hi, I'm Oleg.
            </h1>
            <h2 className="font-code font-extrabold text-subheading text-7xl">
              I am <span className="text-heading-accent">Web Developer</span>
            </h2>
          </div>
          <div className="w-[34rem]">
            <p className="font-light text-2xl text-content tracking-wider leading-[1.4em]">
              I am currently studying web development at Media College Denmark,
              where I am building skills in both web development and UI/UX
              design.
            </p>
          </div>
          <button className="font-light text-xl tracking-wide rounded-md text-content py-5 px-16 bg-button-gradient mt-12">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
