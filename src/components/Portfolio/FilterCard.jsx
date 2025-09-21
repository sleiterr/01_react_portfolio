import React from "react";
import Pagination from "../Pagination/Pagination";
import { FilterCaunter } from "./FilterCaunter";

const FilterCard = ({
  currentPage,
  setCurrentpage,
  totalPage,
  setDirection,
}) => {
  return (
    <>
      <div className="col-span-1 h-full bg-black/40 rounded-xl border-r-1 border-t-1 border-sky-500 hidden md:block">
        <div className="">
          <FilterCaunter
            currentPage={currentPage}
            totalPage={totalPage}
            className="text-white text-2xl hidden md:inline"
          />
        </div>
        <div className=""></div>
        <div className="">
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentpage={setCurrentpage}
            setDirection={setDirection}
          />
        </div>
      </div>
    </>
  );
};

export default FilterCard;
