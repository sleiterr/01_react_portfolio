import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useScroll, useMotionValueEvent } from "framer-motion";

import logo from "../../assets/logo/logo-white.svg";

import NavLogo from "../../assets/logo/logo.svg";
import { Link } from "react-scroll";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { GoCommandPalette } from "react-icons/go";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  console.log("pathname", location.pathname, "isHome", isHome);
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 0);
    }
  }, [isHome]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHome) return;
    console.log("Page scroll: ", latest);

    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest == 0 && scrolled) {
      setScrolled(false);
    }
  });
  
  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [menuOpen]);

  useEffect(() => {
    console.log("location:", location.pathname, "isHome:", isHome);
  }, [location.pathname, isHome]);

  useEffect(() => {
    console.log("scrolled changed ->", scrolled);
  }, [scrolled]);

  const defaultClasses =
    "flex items-center justify-between inset-0 border-b px-[30px]";

  let navBarClasses =
    scrolled || !isHome
      ? `${defaultClasses} bg-white/75 backdrop-blur-lg`
      : `${defaultClasses} bg-transparent`;

  return (
    <header
      className={clsx(
        isHome && !scrolled ? "absolute" : "fixed",
        "inset-x-0 top-0 z-30 w-full transition-all"
      )}
    >
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/10  transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <nav
        className={navBarClasses}
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <div className="relative py-[1rem] shrink-0 cursor-pointer">
          <Link to="/" smooth={true} duration={800}>
            {!scrolled ? (
              <img src={logo} alt="logo" className="w-[160px] h-auto" />
            ) : (
              <img src={NavLogo} alt="logo" className="w-[160px] h-auto" />
            )}
          </Link>

          <span
            className="absolute top-[15%] right-[-22px] h-[70%] w-[1px]"
            style={{
              backgroundColor: scrolled
                ? "rgba(62, 62, 62,0.60)"
                : "rgba(255, 255, 255,0.2)",
            }}
          ></span>
        </div>
        <div className="relative z-[1100]">
          <BurgerMenu
            scrolled={scrolled}
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </nav>
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
        onClick={() => setMenuOpen(false)}
      >
        <div className="">
          <img src={NavLogo} alt="logo" className="w-[160px] h-auto" />
        </div>

        <nav className="self-center m-auto">
          <ul className="flex flex-col items-start gap-6">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={800}
                className="relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
                className="relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
                className="relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
                className="relative fondt-code font-normal text-nav text-3xl tracking-wide cursor-pointer before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-[var(--bg-border)] before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
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
        </nav>
        <div className="flex items-center gap-4 font-normal text-xl text-nav tracking-wider mb-4">
          <GoCommandPalette className="w-10 h-10" />
          junior developer
        </div>
      </div>
    </header>
  );
};

export default Header;
