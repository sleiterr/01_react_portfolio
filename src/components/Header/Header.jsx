import React, { useState } from "react";
import logo from "../../assets/logo/logo-white.svg";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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

        <div
          className={clsx(
            "fixed inset-0 z-[1000]",
            "bg-[rgba(28,28,28,0.98)]",
            "flex flex-col justify-center items-center",
            "transition-all duration-300",
            {
              "opacity-0 -translate-y-5 pointer-events-none": !menuOpen,
              "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            }
          )}
          onClick={handleLinkClick}
        >
          <nav>
            <ul className="flex flex-col items-center gap-4">
              <li>
                <NavLink onClick={handleLinkClick}>About</NavLink>
              </li>
              <li>
                <NavLink onClick={handleLinkClick}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink onClick={handleLinkClick}>Experence</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
