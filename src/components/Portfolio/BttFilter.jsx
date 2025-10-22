import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";

const itemsFilterBttn = [
  {
    id: 1,
    text: "All",
    icon: <BiCategoryAlt className="text-3xl text-white inline-block" />,
    category: "all",
  },
  {
    id: 2,
    text: "Html",
    icon: <ImHtmlFive2 className="text-3xl text-white inline-block" />,
    category: "html",
  },
  {
    id: 3,
    text: "Java Script",
    icon: <AiOutlineJavaScript className="text-3xl text-white inline-block" />,
    category: "javascript",
  },
  {
    id: 1,
    text: "React",
    icon: <FaReact className="text-3xl text-white inline-block" />,
    category: "react",
  },
  {
    id: 1,
    text: "Next.js",
    icon: <TbBrandNextjs className="text-3xl text-white inline-block" />,
    category: "Next.js",
  },
];

export const BttFilter = ({ handleCategory }) => {
  return (
    <ul className="flex lg:flex-col lg:items-start gap-4">
      {itemsFilterBttn.map(({ id, category, text, icon }) => {
        return (
          <li key={id}>
            <button
              className="flex items-center justify-center gap-4 cursor-pointer"
              onClick={() => handleCategory(category)}
            >
              {icon}
              <p className="text-2xl text-white">{text}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
