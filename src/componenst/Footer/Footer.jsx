import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          <ul className={s.footerList}>
            <li className={s.footerItem}>
              <a href="mailto:sleite4r@gmail.com" className={s.footerLinks}>
                sleite4r@gmail.com
              </a>
            </li>
            <li className={s.footerItem}>
              <a
                href="tel:+45 53 77 01 76"
                className={s.footerLinks}
                target="_blank"
              >
                +45 53 77 01 76
              </a>
            </li>
          </ul>

          <ul className={s.footerIcon}>
            <li className={s.itemIcon}>
              <a href="#" className={s.iconLink}>
                <FaGithub className={s.icon} />
              </a>
            </li>
            <li className={s.itemIcon}>
              <a href="#" className={s.iconLink}>
                <FaLinkedin className={s.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
