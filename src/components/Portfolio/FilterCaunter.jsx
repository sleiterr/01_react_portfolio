import React from "react";
import clsx from "clsx";
import AnimatedNumber from "../Pagination/AnimateNumber";

export const FilterCaunter = ({ currentPage, totalPage, className }) => {
  return (
    <div className="flex flex-col items-end justify-center gap-2">
      <span
        className={clsx(
          className,
          "relative after:content-[''] after:absolute after:top-8 after:-right-0 after:w-4 after:bg-white after:h-0.5 h-8 w-8"
        )}
      >
        <AnimatedNumber value={currentPage} />
      </span>
      <span className={className}>{totalPage}</span>
    </div>
  );
};
