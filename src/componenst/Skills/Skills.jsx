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
    <section className="bg-skills">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <h2 className="font-code font-normal text-5xl text-heading-primary tracking-wide mb-10">
          My Skills
        </h2>
        <div className="">
          <ul className="flex flex-wrap flex-col justify-center items-start gap-8">
            <li className="relative overflow-hidden flex flex-col gap-4 p-10 ">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-0" />
              <h4 className="relative z-10 font-normal text-content text-xl tracking-wider mb-4">
                Frontend Stack
              </h4>
              <div className="relative z-10 flex items-center gap-4">
                <img src={react} alt="react" className="w-18 h-auto" />
                <img src={tailwind} alt="tailwind" className="w-18 h-auto" />
                <img src={js} alt="react" className="w-18 h-auto" />
                <img src={html} alt="html" className="w-18 h-auto" />
                <img src={css} alt="css" className="w-18 h-auto" />
              </div>
            </li>

            <li className="flex flex-col gap-4 p-10">
              <h4 className="font-normal text-content text-xl tracking-wider mb-4">
                CMS & Data Layer
              </h4>
              <div className="flex items-center gap-4">
                <img src={sanity} alt="sanity" className="w-36 h-auto" />
                <img src={wordPress} alt="wordPress" className="w-16 h-auto" />
              </div>
            </li>

            <li className="flex flex-col gap-4 p-10">
              <h4 className="font-normal text-content text-xl tracking-wider mb-4">
                Development Workflow
              </h4>
              <div className="flex items-center gap-4">
                <img src={gitHub} alt="Git Hub" className="w-16 h-auto" />
                <img src={vercel} alt="vercel" className="w-36 h-auto" />
              </div>
            </li>

            <li className="flex flex-col gap-4 p-10">
              <h4 className="font-normal text-content text-xl tracking-wider mb-4">
                UI/UX Tools
              </h4>
              <div className="flex items-center gap-4">
                <img src={figma} alt="figma" className="w-16 h-auto" />
                <img src={ph} alt="photoShop" className="w-18 h-auto" />
                <img src={ai} alt="adobe Illustrator" className="w-18 h-auto" />
              </div>
            </li>
          </ul>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
