import React from "react";
import logo from "../../assets/logo/logo-white.svg";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.logoFooter}>
          <img src={logo} alt="logo" className={s.logoFooter} />
        </div>
        <div className={s.footerContact}>
          <ul class={s.footerList}>
            <li class={s.footerItem}>
              <a href="mailto:sleite4r@gmail.com" class={s.footerLinks}>
                sleite4r@gmail.com
              </a>
            </li>
            <li class={s.footerItem}>
              <a
                href="tel:+45 53 77 01 76"
                class={s.footerLinks}
                target="_blank"
              >
                +45 53 77 01 76
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
