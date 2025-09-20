import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Pagination = ({
  currentPage,
  totalPage,
  setCurrentpage,
  setDirection,
}) => {
  const prev = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentpage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < totalPage) {
      setDirection(1);
      setCurrentpage(currentPage + 1);
    }
  };

  return (
    <div className="">
      <button className="" onClick={prev} disabled={currentPage === 1}>
        Prev <SlArrowRight className="" />
      </button>
      <span>
        {currentPage} of {totalPage}
      </span>
      <button className="" onClick={next} disabled={currentPage === totalPage}>
        Next <SlArrowRight className="" />
      </button>
    </div>
  );
};

export default Pagination;
