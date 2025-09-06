import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import logo from "../../assets/logo/logo-white.svg";

import styled from "styled-components";

// import s from "./Footer.module.css";
// import clsx from "clsx";

const Footer = () => {
  return (
    //  border-t border-white
    <footer className="flex flex-col items-center justify-center bg-footer">
      <div className="flex items-start flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between w-full py-6 px-8">
        <div className="">
          <Link
            smooth={true}
            duration={800}
            to="hero"
            className="cursor-pointer"
          >
            <img src={logo} alt="logo" className="w-40 h-full" />
          </Link>
        </div>

        {/* footerContact */}
        <div className="flex flex-col md:items-center gap-2">
          <ul className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6">
            <li className="footer-item flex items-center gap-2">
              <AiOutlineMail className="text-white w-6 h-6" />
              <a
                href="mailto:sleite4r@gmail.com"
                className="footer-link font-light text-lg tracking-wide text-content"
              >
                sleite4r@gmail.com
              </a>
            </li>
            <li className="footer-item flex items-center justify-center gap-2">
              <BsTelephone className="text-white w-6 h-6" />
              <a
                href="tel:+45 53 77 01 76"
                className="footer-link font-light text-lg tracking-wide text-content"
                target="_blank"
              >
                +45 53 77 01 76
              </a>
            </li>
          </ul>
        </div>

        <StyledWrapper>
          <ul className="container">
            <li className="cursor-pointer">
              <a href className="icon icon-github">
                <FaGithub className="w-[40px] h-[40px] text-white" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href className="icon icon-in">
                <FaLinkedin className="w-[40px] h-[40px] text-white" />
              </a>
            </li>
          </ul>
        </StyledWrapper>
      </div>
      {/* py-1 bg-slate-700 w-full */}
      <div className="grid place-items-center py-2 border-t border-slate-500 md:w-1/3 px-8 md:px-0 w-full">
        <p className="flex items-center gap-4 font-light text-base text-zinc-300 tracking-wider text-center">
          Copyright <FaRegCopyright className="text-zinc-300" /> 2025 Oleg
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  .container {
    display: flex;
    column-gap: 28px;
  }

  .icon {
    display: inline-flex;
    width: 60px;
    height: 60px;
    text-decoration: none;
    outline: 2px solid white;
    border-radius: 50%;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: 0.25s;
    color: white;
  }

  .icon:hover {
    outline-offset: 4px;
  }

  .icon svg {
    margin: auto;
    width: 31px;
  }

  .icon-github:hover {
    background-color: #555555;
    outline-color: #555555;
  }

  .icon-in:hover {
    background-color: #0a66c2;
    outline-color: #0a66c2;
  }

  .icon:hover svg {
    animation: shake 0.25s;
  }

  @keyframes shake {
    10% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(-15deg);
    }
  }
`;
