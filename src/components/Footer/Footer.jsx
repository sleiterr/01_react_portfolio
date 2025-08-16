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
    <footer className="flex flex-col bg-footer border-t border-white">
      <div className="flex items-center justify-between w-full py-6 px-8">
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
        <div className="flex flex-col items-center gap-2">
          <ul className="flex items-center justify-center gap-6">
            <li className="footer-item flex items-center gap-2">
              <AiOutlineMail className="text-white w-6 h-6" />
              <a
                href="mailto:sleite4r@gmail.com"
                className="footer-link font-normal text-lg tracking-wider text-content"
              >
                sleite4r@gmail.com
              </a>
            </li>
            <li className="footer-item flex items-center justify-center gap-2">
              <BsTelephone className="text-white w-6 h-6" />
              <a
                href="tel:+45 53 77 01 76"
                className="footer-link font-normal text-lg tracking-wider text-content"
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
      <div className="grid place-items-center py-2 bg-zinc-500/20 w-full">
        <p className="flex items-center gap-4 font-normal text-xl text-gray-400/90 tracking-wider text-center">
          Copyright <FaRegCopyright className="text-gray-400/90" /> 2025 Oleg
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
