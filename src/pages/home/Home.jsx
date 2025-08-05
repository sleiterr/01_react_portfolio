import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  const heroRef = React.useRef(null);
  return (
    <>
      <Header />
      <HeroSection heroRef={heroRef} />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
};

export default Home;
