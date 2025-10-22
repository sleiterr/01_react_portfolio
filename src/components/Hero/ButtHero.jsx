import React from "react";
import clsx from "clsx";

export const ButtHero = () => {
  return (
    <div>
      <button
        className={clsx(
          "font-medium text-lg tracking-wide rounded-md text-content py-4 px-12 sm:py-4 sm:px-12 bg-button-gradient mt-8",
          "md:py-4 md:px-12 md:text-2xl",
          " lg:mt-12 lg:text-xl",
          "cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-slate-600 active:bg-slate-600"
        )}
      >
        Download Resume
      </button>
    </div>
  );
};
