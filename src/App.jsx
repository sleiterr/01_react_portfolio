import "./App.css";
import "./index.css";

import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import projectsData from "./Data/projectsData.json";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="bg-projects-gradient">
        <HeroSection />
        <About />
        <Skills />
        <Portfolio type={projectsData} />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default App;
