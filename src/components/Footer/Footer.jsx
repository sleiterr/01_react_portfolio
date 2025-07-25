import React from "react";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import logo from "../../assets/logo/logo-white.svg";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="px-8 py-6 bg-footer">
      <div className="flex items-center justify-between w-full">
        <div className={s.logoFooter}>
          <img src={logo} alt="logo" className="w-40" />
        </div>

        {/* footerContact */}
        <div className="flex flex-col items-center gap-1">
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
          <p className="flex items-center gap-4 text-white text-center text-xl">
            Copyright <FaRegCopyright className="text-white" /> 2025 Oleg
          </p>
        </div>

        <ul className="flex items-end justify-center gap-6">
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
    </footer>
  );
};

export default Footer;
