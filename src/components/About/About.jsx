import React from "react";
import { GoCommandPalette } from "react-icons/go";
import GradientText from "../animation/GradientText";

const About = () => {
  return (
    <section className="" id="about">
      <div className="px-4 py-[8rem] mx-auto md:max-w-7xl">
        {/* <div className=""></div> */}
        <div className="relative">
          <span className="absolute -top-[5rem] md:-left-[4rem] flex items-center gap-4 font-medium text-lg md:text-2xl text-caption tracking-wider animate-fade-in-up">
            <GoCommandPalette className="w-8 h-8 md:w-12  md:h-12" />
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={6}
              showBorder={false}
              className=""
            >
              Junior developer
            </GradientText>
          </span>
          <h2 className="font-code font-light text-4xl md:text-5xl text-heading-primary tracking-wide mb-4">
            About Me
          </h2>
          <div className="grid grid-row-2 md:grid-cols-2 gap-8">
            <p className="font-light text-content text-base md:text-lg tracking-wide md:tracking-wider leading-[1.6]">
              I am a beginner web developer. I live and study in Denmark. I
              speak Ukrainian, Danish and English. I am currently studying at
              Viborg Media College, where Iam gaining practical web development
              skills and learning the principles andmethods of web design. In
              particular, I am studying visual composition, colorschemes,
              typography and creating intuitive interfaces that improve
              userinteraction with the product.
            </p>

            <p className="font-light text-content text-base md:text-lg tracking-wide md:tracking-wider leading-[1.6]">
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
