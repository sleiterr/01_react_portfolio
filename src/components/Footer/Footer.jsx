import React from "react";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import logo from "../../assets/logo/logo-white.svg";

const Footer = () => {
  return (
    <footer className="px-8 py-6 bg-footer">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <a href="#hero">
            <img src={logo} alt="logo" className="w-40 h-full" />
          </a>
        </div>

        {/* footerContact */}
        <div className="flex flex-col items-center gap-2">
          <ul className="flex items-center justify-center gap-6">
            <li className="flex items-center gap-2">
              <AiOutlineMail className="text-white w-6 h-6" />
              <a
                href="mailto:sleite4r@gmail.com"
                className="font-normal text-lg tracking-wider text-content"
              >
                sleite4r@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <BsTelephone className="text-white w-6 h-6" />
              <a
                href="tel:+45 53 77 01 76"
                className="font-normal text-lg tracking-wider text-content"
                target="_blank"
              >
                +45 53 77 01 76
              </a>
            </li>
          </ul>
          <p className="flex items-center gap-4 font-normal text-xl text-content tracking-wider text-center">
            Copyright <FaRegCopyright className="text-white" /> 2025 Oleg
          </p>
        </div>

        <ul className="flex items-end justify-center gap-6">
          <li className="">
            <a href="#" className="">
              <FaGithub className="w-[46px] h-[46px] text-white" />
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              <FaLinkedin className="w-[46px] h-[46px] text-white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
