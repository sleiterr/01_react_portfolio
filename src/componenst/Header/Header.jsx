import React from "react";
import logo from "../../assets/logo/logo.svg";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav_bar}>
        <div className={s.nav_logo}>
          <img src={logo} alt="logo" className={s.logo} />
              </div>
              
        {/* 
        <div class="burger-btn">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div> */}

        <ul className={s.nav_list}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
