import React from "react";
import Pagination from "../Pagination/Pagination";
import { BttFilter } from "./BttFilter";
import { FilterCaunter } from "./FilterCaunter";

const FilterCard = ({
  currentPage,
  setCurrentpage,
  totalPage,
  setDirection,
  setSelectCategory,
}) => {
  const handleCategory = (value) => {
    setSelectCategory(value);
    setCurrentpage(1);
  };
  return (
    <>
      <div className="col-span-1 h-full bg-black/40 rounded-xl border-r-1 border-t-1 border-cyan-400 hidden md:block py-6 px-4">
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <FilterCaunter
              currentPage={currentPage}
              totalPage={totalPage}
              className="text-white text-xl hidden md:flex flex-col items-end justify-center"
            />
          </div>
          <div className="flex justify-center">
            <BttFilter handleCategory={handleCategory} />
          </div>
          <div className="">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              setCurrentpage={setCurrentpage}
              setDirection={setDirection}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
