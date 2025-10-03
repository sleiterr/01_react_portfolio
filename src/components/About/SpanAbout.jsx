import React from "react";
import { GoCommandPalette } from "react-icons/go";
import GradientText from "../animation/GradientText";

export const SpanAbout = () => {
  return (
    <>
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
    </>
  );
};
