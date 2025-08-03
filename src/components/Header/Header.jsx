import React, { useState } from "react";
import logo from "../../assets/logo/logo-white.svg";
import NavLogo from "../../assets/logo/logo.svg";
import { Link } from "react-scroll";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { GoCommandPalette } from "react-icons/go";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="">
      <nav
        className="fixed flex items-center justify-between top-0 left-0 tign-0 z-30 w-full border-b bg-transparent px-[30px]"
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <div className="relative py-[1rem] shrink-0">
          <img src={logo} alt="logo" className="w-[160px] h-auto logo-color" />
          <span
            className="absolute top-[15%] right-[-22px] h-[70%] w-[1px]"
            style={{ backgroundColor: "rgba(255, 255, 255,0.2)" }}
          ></span>
        </div>
        <div className="relative z-[1100]">
          <BurgerMenu
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen((prev) => !prev)}
          />
        </div>
        {menuOpen && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/10 transition-opacity duration-300"></div>
        )}
        <div
          className={clsx(
            "fixed top-0 bottom-0 right-0 z-[1000]",
            "w-[50rem] h-full",
            "bg-white/90 backdrop-blur-sm",
            "flex flex-col justify-start items-start",
            "pt-8 px-8 gap-10",
            "transition-all duration-300",
            {
              "opacity-0 -translate-y-5 pointer-events-none": !menuOpen,
              "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            }
          )}
          onClick={handleLinkClick}
        >
          <div className="">
            <img src={NavLogo} alt="logo" className="w-[160px] h-auto" />
          </div>

          <nav className="self-center m-auto">
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={800}
                  className="relative fondt-code font-normal text-nav text-3xl tracking-wide before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
                  className="relative fondt-code font-normal text-nav text-3xl tracking-wide before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="relative fondt-code font-normal text-nav text-3xl tracking-wide before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
                  className="relative fondt-code font-normal text-nav text-3xl tracking-wide before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
                  className="relative fondt-code font-normal text-nav text-3xl tracking-wide before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-black before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
                  onClick={handleLinkClick}
                >
                  Experience
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4 font-normal text-xl text-nav tracking-wider mb-4">
            <GoCommandPalette className="w-10 h-10" />
            junior developer
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
