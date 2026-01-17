import React from "react";
import BlurText from "../animation/BlurText";
import { SpanAbout } from "./SpanAbout";
import SplitText from "../animation/SplitText";
import clsx from "clsx";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const About = () => {
  return (
    <section className="" id="about">
      <div className="px-4 py-[8rem] mx-auto md:max-w-7xl">
        <div className="relative">
          <SpanAbout />
          <SplitText
            tag="h2"
            text="About Me"
            className="font-code font-bold text-5xl md:text-6xl text-primary tracking-wide mb-4 w-full"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <div className="grid grid-row-2 lg:grid-cols-2 gap-8">
            <AboutItms duration={0.6} delay={350}>
              I am a Junior Full Stack Developer based in Denmark, fluent in
              Ukrainian, Danish, and English. I have completed my studies at
              Viborg Media College, where I gained both practical and
              theoretical skills in full stack web development and UX/UI design.
              To further develop my UX/UI skills, I continuously improve my
              sense of visual composition, color schemes, and typography,
              creating intuitive interfaces that enhance user interaction with
              digital products.
            </AboutItms>
            <AboutItms duration={0.8} delay={350}>
              I am seeking my first commercial experience as a Junior Web
              Developer, with a strong interest in developing both technical and
              soft skills while contributing to team-based projects. I am also
              eager to improve my workflow with GitHub in a collaborative
              environment, including working with repositories, pull requests,
              and code reviews. My primary focus is on further developing my
              skills in React, Tailwind CSS, and Next.js.
            </AboutItms>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const AboutItms = ({ children, duration = 1, delay }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <BlurText
          as="p"
          key={index}
          duration={duration}
          delay={delay}
          className={clsx(
            "font-light text-content text-base leading-[1.6] tracking-normal",
            "sm:text-lg sm:leading-[1.65]",
            "md:text-lg md:leading-[1.65] md:tracking-[0.02em]",
            "lg:text-xl lg:leading-[1.7]",
          )}
        >
          {child}
        </BlurText>
      ))}
    </>
  );
};
