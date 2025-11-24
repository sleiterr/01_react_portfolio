import React from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

const NavMenu = ({ handleLinkClick }) => {
  return (
    <ul className="flex flex-col items-start gap-6">
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full"
          )}
          onClick={handleLinkClick}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-100}
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full"
          )}
          onClick={handleLinkClick}
        >
          About
        </Link>
      </li>
      <li className="hidden md:block">
        <Link
          to="skills"
          smooth={true}
          duration={800}
          offset={-100}
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full"
          )}
          onClick={handleLinkClick}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="portfolio"
          smooth={true}
          duration={800}
          offset={-100}
          className={clsx(
            "fondt-code font-normal text-nav text-3xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full"
          )}
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          duration={800}
          offset={-100}
          className="relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-black before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
          onClick={handleLinkClick}
        >
          Experience
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
