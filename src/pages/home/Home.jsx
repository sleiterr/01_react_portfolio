import React from "react";

import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import HeroSection from "../../components/Hero/HeroSection";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
};

export default Home;
