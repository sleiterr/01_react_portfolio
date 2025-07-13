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
        <h2>My Skills</h2>
        <div className="w-full h-full">
          <div className="">
            <img src={react} alt="react" className="w-10 h-10" />
            <img src={tailwind} alt="tailwind" className="w-10 h-10" />
            <img src={js} alt="react" className="w-10 h-10" />
            <img src={html} alt="html" className="w-10 h-10" />
            <img src={css} alt="css" className="w-10 h-10" />
            <img src={sanity} alt="sanity" className="w-10 h-10" />
            <img src={wordPress} alt="wordPress" className="w-10 h-10" />
            <img src={gitHub} alt="Git Hub" className="w-10 h-10" />
            <img src={vercel} alt="vercel" className="w-10 h-10" />
            <img src={figma} alt="figma" className="w-10 h-10" />
            <img src={ph} alt="photoShop" className="w-10 h-10" />
            <img src={ai} alt="adobe Illustrator" className="w-10 h-10" />
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
