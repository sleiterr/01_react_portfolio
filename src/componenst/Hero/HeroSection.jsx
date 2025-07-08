import React from "react";

import heroBg from "../../assets/img/hero-design---Copy-1.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-no-repeat bg-center "
      id="#"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute top-[50%] left-[100px] flex items-start justify-center">
        <div className="">
          <h1 className="font-code text-subheading text-5xl">Hi, I'm Oleg.</h1>
          <h2 className=" text-subheading text-5xl">
            I am <span className="text-heading-accent">Web Developer</span>
          </h2>
          <p className="">
            I am currently studying web development at Media College Denmark,
            where I am building skills in both web development and UI/UX design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
