import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  const heroRef = React.useRef(null);
  return (
    <>
      <main>
        <HeroSection heroRef={heroRef} />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
      </main>
    </>
  );
};

export default Home;
