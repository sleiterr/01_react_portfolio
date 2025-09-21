import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skillslop from "../../components/Skillslop/SkillTicker";
import { techLogos } from "../../Data/techLogos";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
// } from "react-icons/si";

const Home = () => {
  const [currentPage, setCurrentpage] = useState(1);
  const heroRef = React.useRef(null);
  return (
    <>
      <Header />
      <main>
        <HeroSection heroRef={heroRef} />
        <div
          className="block md:hidden"
          style={{ height: "100px", position: "relative", overflow: "hidden" }}
        >
          <Skillslop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={40} //heght_icon
            gap={40} //width_icon
            // className="px-12"
            pauseOnHover
            scaleOnHover
            fadeOut
            // fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
        <About />
        <Skills />
        <Portfolio currentPage={currentPage} setCurrentpage={setCurrentpage} />
        <Experience />
      </main>
    </>
  );
};

export default Home;
