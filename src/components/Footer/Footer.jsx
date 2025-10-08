import React from "react";
import { Link } from "react-scroll";
import { LinkWrapper } from "./LinkWrapper";
import { ContactFooter } from "./ContactFooter";

import { FaRegCopyright } from "react-icons/fa";
import logo from "../../assets/logo/logo-white.svg";

const Footer = () => {
  return (
    //  border-t border-white
    <footer className="flex flex-col items-center justify-center bg-footer">
      <div className="flex items-start flex-col gap-8 md:gap-0 md:flex-row md:items-center justify-between w-full py-6 px-8">
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

        <div className="flex flex-col md:items-center gap-2">
          <ContactFooter />
        </div>

        <LinkWrapper />
      </div>
      <div className="grid place-items-center py-4 md:py-2 border-t border-slate-500 md:w-1/3 px-8 md:px-0 w-full">
        <p className="flex items-center gap-4 font-light text-base text-zinc-300 tracking-wider text-center">
          Copyright <FaRegCopyright className="text-zinc-300" /> 2025 Oleg
        </p>
      </div>
    </footer>
  );
};

export default Footer;

//   .container {
//     display: flex;
//     column-gap: 28px;
//   }

//   .icon {
//     display: inline-flex;
//     width: 60px;
//     height: 60px;
//     text-decoration: none;
//     outline: 2px solid white;
//     border-radius: 50%;
//     transition-property: outline-offset, outline-color, background-color;
//     transition-duration: 0.25s;
//     color: white;
//   }

//   .icon:hover {
//     outline-offset: 4px;
//   }

//   .icon svg {
//     margin: auto;
//     width: 31px;
//   }

//   .icon-github:hover {
//     background-color: #555555;
//     outline-color: #555555;
//   }

//   .icon-in:hover {
//     background-color: #0a66c2;
//     outline-color: #0a66c2;
//   }

//   .icon:hover svg {
//     animation: shake 0.25s;
//   }

//   @keyframes shake {
//     10% {
//       transform: rotate(15deg);
//     }
//     20% {
//       transform: rotate(-15deg);
//     }
//   }
// `;
