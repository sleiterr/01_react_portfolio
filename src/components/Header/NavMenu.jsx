import React from "react";
// import { Link } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick }) => {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";

  return (
    <ul className="flex flex-col items-start gap-6">
      <li>
        <Link
          to="/#hero"
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
          onClick={handleLinkClick}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/#about"
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
          onClick={handleLinkClick}
        >
          About
        </Link>
      </li>
      <li className="hidden md:block">
        <Link
          to="/#skills"
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
          onClick={handleLinkClick}
        >
          Skills
        </Link>
      </li>
      <li className="hidden md:block">
        <Link
          to="/#portfolio"
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/#experience"
          className="relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-black before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
          onClick={handleLinkClick}
        >
          Experience
        </Link>
      </li>
      {!isBlogPage && (
        <li>
          <Link
            to="/blog"
            className={clsx(
              "relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-black before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full",
              "hidden lg:block",
            )}
            onClick={handleLinkClick}
          >
            Blog
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavMenu;
