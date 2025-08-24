import React from "react";
import {
  react,
  tailwind,
  js,
  html,
  css,
  sanity,
  wordPress,
  vercel,
  gitHub,
  figma,
  ph,
  ai,
} from "../../assets/iconExports/index";

const Skills = () => {
  return (
    <section className="" id="skills">
      <div className="py-[8rem] mx-auto md:max-w-7xl">
        <h2 className="font-code font-normal text-5xl text-heading-primary tracking-wide mb-15">
          My Skills
        </h2>
        <div className="">
          {/* Frontend Stack */}
          <ul className="px-8 pt-4 pb-16 w-[31.2rem] h-auto rounded-xl bg-white/20 backdrop-blur-sm">
            <li className="">
              <h4 className="font-light text-content text-base tracking-wider mb-4">
                Frontend Stack
              </h4>
              <div className="flex items-center justify-start gap-4 pl-8">
                <img src={react} alt="react" className="size-14" />
                <img src={tailwind} alt="tailwind" className="size-14" />
                <img src={js} alt="react" className="size-12" />
                <img src={html} alt="html" className="size-14" />
                <img src={css} alt="css" className="size-14" />
              </div>
            </li>
          </ul>

          {/* CMS & Data Layer */}
          <ul className=" flex flex-col pt-4 pl-6 pb-8 w-[24.6rem] h-[9.2rem] rounded-xl  bg-white/20 backdrop-blur-sm z-1">
            <li className="">
              <h4 className="font-light text-content text-base tracking-wider mb-4">
                CMS & Data Layer
              </h4>
              <div className="flex items-center justify-start gap-4 pl-16">
                <img src={sanity} alt="sanity" className="w-[7.5rem] h-auto" />
                <img
                  src={wordPress}
                  alt="wordPress"
                  className="w-[2.5rem] h-auto"
                />
              </div>
            </li>
          </ul>

          {/* Development Workflow */}
          <ul className="pt-4 px-6 pb-8  w-[23.4rem] h-[8.1rem] rounded-xl bg-white/20 backdrop-blur-sm z-0 top-[15rem] translate-x-[12rem]">
            <li className="">
              <h4 className="font-light text-content text-base tracking-wider mb-4">
                Development Workflow
              </h4>
              <div className="flex items-center  justify-center gap-4 pr-4">
                <img src={gitHub} alt="Git Hub" className="size-12" />
                <img src={vercel} alt="vercel" className="w-[7rem] h-auto" />
              </div>
            </li>
          </ul>

          {/* UI/UX Tools */}
          <ul className="px-6 pt-4 pb-8 w-[23rem] h-[8rem] bg-white/20 backdrop-blur-sm z-2 rounded-xl">
            <li className="absolute">
              <h4 className="font-light text-content text-base tracking-wider mb-2">
                UI/UX Tools
              </h4>
              <div className="flex items-center justify-start gap-4 pl-18">
                <img src={figma} alt="figma" className="size-12" />
                <img src={ph} alt="photoShop" className="size-12" />
                <img src={ai} alt="adobe Illustrator" className="size-12" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
