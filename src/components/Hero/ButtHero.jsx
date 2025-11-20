import React from "react";
import clsx from "clsx";


export const ButtHero = () => {
  return (
    <div>
      <button
        className={clsx(
          "font-light text-lg tracking-wide rounded-md text-content py-3 px-12 bg-button-gradient mt-8",
          "md:py-4 md:px-12 md:text-2xl",
          " lg:mt-12 lg:text-xl lg:py-4 lg:px-12",
          "cursor-pointer focus:outline-3 focus:outline-offset-2 focus:outline-slate-600 active:bg-slate-600",
          "transition-all duration-300 ease-in-out",
          "hover:brightness-110"
        )}
      >
        Download Resume
      </button>
    </div>
  );
};
