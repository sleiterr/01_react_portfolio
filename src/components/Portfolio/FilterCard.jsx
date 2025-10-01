import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import Pagination from "../Pagination/Pagination";
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
            <ul className="flex flex-col items-start gap-4">
              <li className="">
                <button
                  className="flex items-center justify-center gap-4 cursor-pointer"
                  onClick={() => handleCategory("all")}
                >
                  <BiCategoryAlt className="text-3xl text-white inline-block" />
                  <p className="text-2xl text-white">All</p>
                </button>
              </li>
              <li className="">
                <button
                  className="flex items-center justify-center gap-4 cursor-pointer"
                  onClick={() => handleCategory("html")}
                >
                  <ImHtmlFive2 className="text-3xl text-white inline-block" />
                  <p className="text-2xl text-white">html</p>
                </button>
              </li>
              <li className="">
                <button
                  className="flex items-center justify-center gap-4 cursor-pointer"
                  onClick={() => handleCategory("javascript")}
                >
                  <AiOutlineJavaScript className="text-3xl text-white inline-block" />
                  <p className="text-2xl text-white">Java Script</p>
                </button>
              </li>
              <li className="">
                <button
                  className="flex items-center justify-center gap-4 cursor-pointer"
                  onClick={() => handleCategory("react")}
                >
                  <FaReact className="text-3xl text-white inline-block" />
                  <p className="text-2xl text-white">React</p>
                </button>
              </li>
              <li className="">
                <button
                  className="flex items-center justify-center gap-4 cursor-pointer"
                  onClick={() => handleCategory("Next.js")}
                >
                  <TbBrandNextjs className="text-3xl text-white inline-block" />
                  <p className="text-2xl text-white">Next.js</p>
                </button>
              </li>
            </ul>
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
