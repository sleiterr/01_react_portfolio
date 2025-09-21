import React from "react";

export const FilterCaunter = ({ currentPage, totalPage, className }) => {
  return (
    <>
      <span className={className}>{currentPage}</span>
      <span className={className}>{totalPage}</span>
    </>
  );
};
