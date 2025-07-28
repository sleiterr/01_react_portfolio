import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";

import ProjectDetail from "./pages/projectDetail/ProjectDetail";

function App() {
  return (
    <>
      <Header />
      <main className="bg-projects-gradient">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <Skills />
                <Portfolio />
                <Experience />
                <Footer />
              </>
            }
          />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
