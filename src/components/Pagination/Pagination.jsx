import React from "react";
import { SlArrowRight } from "react-icons/sl";
import AnimatedNumber from "./AnimateNumber";

const Pagination = ({
  currentPage,
  totalPage,
  setCurrentpage,
  setDirection,
}) => {
  const prev = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
      setDirection(-1);
    }
  };

  const next = () => {
    if (currentPage < totalPage) {
      setCurrentpage(currentPage + 1);
      setDirection(1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        className="flex items-center gap-2 bg-white px-8 py-2 rounded-sm cursor-pointer"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <SlArrowRight className="rotate-180 " /> Prev
      </button>
      <span className="flex items-center md:hidden">
        <AnimatedNumber value={currentPage} />
      </span>
      <span className="font-medium text-2xl text-white md:hidden">
        of {totalPage}
      </span>
      <span className="font-medium text-2xl text-white md:hidden">
        {totalPage}
      </span>
      <button
        className="flex items-center gap-2 bg-white px-8 py-2 rounded-sm cursor-pointer"
        onClick={next}
        disabled={currentPage === totalPage}
      >
        Next <SlArrowRight className="" />
      </button>
    </div>
  );
};

export default Pagination;
