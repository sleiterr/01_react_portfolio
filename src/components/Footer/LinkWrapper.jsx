import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const wrapperData = [
  {
    id: 1,
    href: "https://github.com/sleiterr",
    className: "icon icon-github",
    icon: (
      <FaGithub className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]text-white" />
    ),
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/oleg-troian-031922250/",
    className: "icon icon-in",
    icon: (
      <FaLinkedin className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]text-white" />
    ),
  },
];

export const LinkWrapper = () => {
  return (
    <StyledWrapper>
      <ul className="container">
        {wrapperData.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <a
              href={item.href}
              target="_blank"
              className={item.className}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

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
