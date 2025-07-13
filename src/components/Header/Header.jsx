import React from "react";
import logo from "../../assets/logo/logo-white.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav
        className="absolute flex items-center justify-between top-0 left-0 tign-0 z-30 w-full border-b bg-transparent px-[30px]"
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <div className="relative py-[1rem] shrink-0">
          <img src={logo} alt="logo" className="w-[160px] h-auto logo-color" />
          <span
            className="absolute top-[15%] right-[-22px] h-[70%] w-[1px]"
            style={{ backgroundColor: "rgba(255, 255, 255,0.2)" }}
          ></span>
        </div>
        <BurgerMenu />
        {/* 
        <div class="burger-btn">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div> */}

        {/* <ul className={s.nav_list}>
          <li className="#">
            <a href="#" className={`${s.nav_links} ${s.hover}`}>
              Home
            </a>
          </li>

          <li className={`${s.nav_item} ${s.contact}`}>
            <a
              href="#"
              className={`${s.nav_links} ${s.nav_cta}`}
              target="_blank"
            >
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className={`${s.nav_links} ${s.hover}`}>
              About
            </a>
          </li>

          <li className={s.nav_item}>
            <a href="#" className={`${s.nav_links} ${s.hover}`}>
              Experience
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
