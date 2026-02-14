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
          " bg-black/40 rounded-xl border-r-1 border-t-1 border-cyan-400 h-auto",
          "lg:py-6 lg:px-4",
          "md:rows-span-1 lg:col-span-1",
          "md:h-24",
          "lg:min-h-[520px] lg:h-auto",
        )}
      >
        {/* Check min height */}
        <div
          className={clsx(
            "flex flex-col justify-center lg:justify-between h-full",
            "",
          )}
        >
          <div className="hidden lg:flex flex-col items-end justify-center">
            <FilterCaunter
              currentPage={currentPage}
              totalPage={totalPage}
              className={clsx("text-white text-xl", "")}
            />
          </div>

          <div className="flex justify-center">
            <BttFilter handleCategory={handleCategory} />
          </div>

          <div className="md:hidden lg:block">
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
