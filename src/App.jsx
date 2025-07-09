import "./App.css";
import "./index.css";

import Header from "./componenst/Header/Header";
import HeroSection from "./componenst/Hero/HeroSection";
import projectsData from "./Data/projectsData.json";
import About from "./componenst/About/About";
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
        <Portfolio type={projectsData} />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default App;
