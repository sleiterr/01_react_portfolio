import React from "react";
import { MdCollections } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import clsx from "clsx";

const ProjectNav = () => {
  return (
    <>
      <nav className="px-8 py-6">
        <ul className="flex items-center justify-end gap-4 md:gap-8">
          <li className="relative">
            <Link
              className={clsx(
                "flex items-center font-light tracking-wider text-content text-2xl md:text-xl gap-2",
                "before:content-[''] before:absolute before:w-0 before:h-0.5 before:rounded-xs before:bg-white before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
              )}
              to="/"
            >
              Home <IoIosArrowRoundForward />
            </Link>
          </li>
          <li className="relative">
            <Link
              className={clsx(
                "flex items-center gap-2 font-light tracking-wider text-content text-2xl md:text-xl",
                "after:absolute after:content-[''] hover:after:w-full after:h-0.5 after:bg-white after:rounded-xs after:-bottom-[.25rem] after:left-0 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100"
              )}
              to="#"
            >
              Portfolio <MdCollections />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProjectNav;
