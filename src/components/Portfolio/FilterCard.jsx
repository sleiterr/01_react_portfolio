import React from "react";
import clsx from "clsx";
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
      <div
        className={clsx(
          " bg-black/40 rounded-xl border-r-1 border-t-1 border-cyan-400 py-6 px-4 h-auto",
          "md:col-span-2 lg:col-span-1 hidden md:block"
        )}
      >
        {/* Check min height */}
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
