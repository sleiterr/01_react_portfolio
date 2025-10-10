import React from "react";
import GradientText from "../animation/GradientText";

export const GradientHeader = () => {
  return (
    <div>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={6}
        showBorder={false}
        className="backdrop-blur-none"
      >
        Web Developer
      </GradientText>
    </div>
  );
};
