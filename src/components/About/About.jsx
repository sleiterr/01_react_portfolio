import React from "react";
import { GoCommandPalette } from "react-icons/go";

const About = () => {
  return (
    <section className="">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div className="grid grid-row-3 relative">
          <span className="flex items-center gap-4 font-normal text-xl text-caption tracking-wider absolute top-[-30%] left-[-7rem]">
            <GoCommandPalette className="w-10 h-10" />
            junior developer
          </span>
          <h2 className="text-5xl text-heading-primary tracking-wide mb-4">
            About Me
          </h2>
          <div className="grid grid-cols-2 gap-24">
            <p className="font-light text-content text-xl tracking-wider leading-[1.6em]">
              I am a beginner web developer. I live and study in Denmark. I
              speak Ukrainian, Danish and English. I am currently studying at
              Viborg Media College, where Iam gaining practical web development
              skills and learning the principles andmethods of web design. In
              particular, I am studying visual composition, colorschemes,
              typography and creating intuitive interfaces that improve
              userinteraction with the product.
            </p>

            <p className="font-light text-content text-xl tracking-wider leading-[1.6em]">
              Why web development ? This field is one of the most
              customer-oriented and project-oriented, where you can enjoy
              creating something new. Yes, it is not an easy field of activity,
              but it provides great and unlimited opportunities for skill
              development. The most important thing in this field is practical
              experience in coding and working with clients, which allows you to
              better understand the user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
