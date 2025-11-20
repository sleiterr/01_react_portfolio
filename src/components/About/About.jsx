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
            className="font-code font-bold text-6xl sm:text-5xl md:text-6xl text-heading-primary tracking-wide mb-4 w-full"
            delay={100}
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
          {/* <h2 className="font-code font-bold text-4xl sm:text-5xl md:text-6xl text-heading-primary tracking-wide mb-4">
            About Me
          </h2> */}
          <div className="grid grid-row-2 lg:grid-cols-2 gap-8">
            <AboutItms duration={0.8} delay={0}>
              I am a beginner web developer. I live and study in Denmark. I
              speak Ukrainian, Danish and English. I am currently studying at
              Viborg Media College, where Iam gaining practical web development
              skills and learning the principles andmethods of web design. In
              particular, I am studying visual composition, colorschemes,
              typography and creating intuitive interfaces that improve
              userinteraction with the product.
            </AboutItms>
            <AboutItms duration={0.8} delay={300}>
              Why web development ? This field is one of the most
              customer-oriented and project-oriented, where you can enjoy
              creating something new. Yes, it is not an easy field of activity,
              but it provides great and unlimited opportunities for skill
              development. The most important thing in this field is practical
              experience in coding and working with clients, which allows you to
              better understand the user experience.
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
            "font-light text-content text-base leading-[1.6] tracking-wide",
            "sm:text-xl md:text-lg sm:tracking-wider ",
            "md:tracking-wider"
          )}
        >
          {child}
        </BlurText>
      ))}
    </>
  );
};
