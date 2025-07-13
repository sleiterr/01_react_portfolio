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
        <h2 className="font-code font-normal text-5xl text-heading-primary tracking-wide mb-15">
          My Skills
        </h2>
        <div className="">
          <ul className="relative flex flex-wrap flex-row justify-center items-start gap-8">
            {/* Frontend Stack */}
            <li className="relative overflow-hidden flex flex-col px-12 pt-6 pb-18 w-[40rem] h-auto rounded-xl translate-x-60">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-0" />
              <h4 className="relative z-10 font-normal text-content text-xl tracking-wider mb-4">
                Frontend Stack
              </h4>
              <div className="relative z-10 flex items-center justify-start gap-6 pl-12">
                <img src={react} alt="react" className="w-18 h-auto" />
                <img src={tailwind} alt="tailwind" className="w-18 h-auto" />
                <img src={js} alt="react" className="w-18 h-auto" />
                <img src={html} alt="html" className="w-18 h-auto" />
                <img src={css} alt="css" className="w-18 h-auto" />
              </div>
            </li>
            {/* CMS & Data Layer */}
            <li className="relative z-10 overflow-hidden flex flex-col pt-6 px-6 pb-14 w-[32rem] h-auto rounded-xl translate-y-38 -translate-x-30">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-0" />
              <h4 className="relative z-10 font-normal text-content text-xl tracking-wider mb-4">
                CMS & Data Layer
              </h4>
              <div className="relstive z-10 flex items-center justify-start gap-6 pl-18">
                <img src={sanity} alt="sanity" className="w-36 h-auto" />
                <img src={wordPress} alt="wordPress" className="w-16 h-auto" />
              </div>
            </li>
            {/* Development Workflow */}
            <li className="relative z-0 overflow-hidden flex flex-col p-8 w-[30rem] rounded-xl translate-y-12 translate-x-18">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-0" />
              <h4 className="relative z-10 font-normal text-content text-xl tracking-wider mb-4">
                Development Workflow
              </h4>
              <div className="relstive z-10 flex items-center  justify-center gap-8 pr-1">
                <img src={gitHub} alt="Git Hub" className="w-16 h-auto" />
                <img src={vercel} alt="vercel" className="w-36 h-auto" />
              </div>
            </li>
            {/* UI/UX Tools */}
            <li className="relative z-10 overflow-hidden flex flex-col pt-6 px-8 pb-12 w-[30rem] h-auto rounded-xl translate-y-12 translate-x-68">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-0" />
              <h4 className="relative z-10 font-normal text-content text-xl tracking-wider mb-4">
                UI/UX Tools
              </h4>
              <div className="relstive z-10 flex items-center justify-start gap-8 pl-18">
                <img src={figma} alt="figma" className="w-16 h-auto" />
                <img src={ph} alt="photoShop" className="w-18 h-auto" />
                <img src={ai} alt="adobe Illustrator" className="w-18 h-auto" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
