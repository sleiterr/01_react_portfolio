import React from "react";
import clsx from "clsx";
import { GoCommandPalette } from "react-icons/go";
import GradientText from "../animation/GradientText";

export const SpanAbout = () => {
  return (
    <>
      <span
        className={clsx(
          "absolute -top-[5rem] flex items-center gap-4 animate-fade-in-up",
          "font-medium md:text-2xl lg:text-lg text-caption tracking-wider",
          "lg:-left-[4rem] lg:text-2xl"
        )}
      >
        <GoCommandPalette className="w-8 h-8 lg:w-12  lg:h-12" />
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
