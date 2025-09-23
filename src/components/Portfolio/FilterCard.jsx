import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
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
      <div className="col-span-1 h-full bg-black/40 rounded-xl border-r-1 border-t-1 border-sky-500 hidden md:block p-4">
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
              <li className="flex items-center justify-center gap-4">
                <ImHtmlFive2 className="text-3xl text-white inline-block" />
                <p className="text-2xl text-white">html</p>
              </li>
              <li className="flex items-center justify-center gap-4">
                <AiOutlineJavaScript className="text-3xl text-white inline-block" />
                <p className="text-2xl text-white">Java Script</p>
              </li>
              <li className="flex items-center justify-center gap-4">
                <FaReact className="text-3xl text-white inline-block" />
                <p className="text-2xl text-white">React</p>
              </li>
              <li className="flex items-center justify-center gap-4">
                <TbBrandNextjs className="text-3xl text-white inline-block" />
                <p className="text-2xl text-white">Next.js</p>
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
