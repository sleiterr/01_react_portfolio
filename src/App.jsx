import "./App.css";
import "./index.css";

import Header from "./componenst/Header/Header";
import HeroSection from "./componenst/Hero/HeroSection";
import projectsData from "./Data/projectsData.json";
import About from "./componenst/About/About";
import Skills from "./componenst/Skills/Skills";
import Experience from "./componenst/Experience/Experience";
import Footer from "./componenst/Footer/Footer";
import Portfolio from "./componenst/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
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
