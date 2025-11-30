import React from "react";
import { FrontEnd } from "./FrontEnd";
import { Cms } from "./Cms";
import { WorkFlow } from "./Workflow";
import { Design } from "./Design";
import SplitText from "../animation/SplitText";
import clsx from "clsx";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Skills = () => {
  return (
    <section className="hidden lg:block" id="skills">
      <div className="py-[8rem] lg:px-4 mx-auto md:max-w-7xl">
        <SplitText
          tag="h2"
          text="My Skills"
          className="font-code font-bold text-6xl text-primary mb-15 w-full leading-[1.2]"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="right"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="relative min-h-[26rem]">
          {/* Frontend Stack */}
          <div
            className={clsx(
              "absolute translate-x-1/2 px-8 pt-4 pb-16 w-[31.2rem] h-auto",
              "rounded-xl bg-white/20 backdrop-blur-sm border-l-1 border-t-1 border-sky-500"
            )}
          >
            <FrontEnd />
          </div>

          {/* CMS & Data Layer */}
          <div
            className={clsx(
              "absolute translate-y-32 left-[30rem] pt-4 pl-6 pb-8 w-[24.6rem] h-[9.2rem]",
              "rounded-xl  bg-white/20 backdrop-blur-sm z-1 border-l-1 border-t-1 border-sky-500"
            )}
          >
            <Cms />
          </div>

          {/* Development Workflow */}
          <div
            className={clsx(
              "absolute pt-4 px-6 pb-8  w-[23.4rem] h-[8.1rem]",
              "rounded-xl bg-white/20 backdrop-blur-sm z-0 top-[15rem] translate-x-[12rem] border-r-1 border-t-1 border-sky-500"
            )}
          >
            <WorkFlow />
          </div>

          {/* UI/UX Tools */}
          <div
            className={clsx(
              "absolute translate-y-58  left-1/2 translate-x-[6rem] px-6 pt-4 pb-8 w-[23rem] h-[8rem]",
              "bg-white/20 backdrop-blur-sm z-2 rounded-xl border-r-1 border-t-1 border-sky-500"
            )}
          >
            <Design />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
