import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import clsx from "clsx";

const itemsFilterBttn = [
  {
    id: 1,
    text: "All",
    icon: (
      <BiCategoryAlt
        className={clsx(
          "text-3xl text-white inline-block",
          "transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]"
        )}
      />
    ),
    category: "all",
  },
  {
    id: 2,
    text: "Html",
    icon: (
      <ImHtmlFive2
        className={clsx(
          "text-3xl text-white inline-block",
          "transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]"
        )}
      />
    ),
    category: "html",
  },
  {
    id: 3,
    text: "Java Script",
    icon: (
      <AiOutlineJavaScript
        className={clsx(
          "text-3xl text-white inline-block",
          "transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]"
        )}
      />
    ),
    category: "javascript",
  },
  {
    id: 4,
    text: "React",
    icon: (
      <FaReact
        className={clsx(
          "text-3xl text-white inline-block",
          "transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]"
        )}
      />
    ),
    category: "react",
  },
  {
    id: 5,
    text: "Next.js",
    icon: (
      <TbBrandNextjs
        className={clsx(
          "text-3xl text-white inline-block",
          "transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-cyan-400"
        )}
      />
    ),
    category: "Next.js",
  },
];

export const BttFilter = ({ handleCategory }) => {
  return (
    <ul
      className={clsx("flex lg:flex-col lg:items-start lg:gap-4", "md:gap-8")}
    >
      {itemsFilterBttn.map(({ id, category, text, icon }) => {
        return (
          <li key={id}>
            <button
              className="group relative flex items-center justify-center gap-2 lg:gap-4 cursor-pointer"
              onClick={() => handleCategory(category)}
            >
              {icon}
              <p
                className={clsx(
                  "text-2xl text-white",
                  "overflow-hidden transition-colors duration-300 ease-out group-hover:text-cyan-400"
                )}
              >
                {text}
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
