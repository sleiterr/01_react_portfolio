import "./App.css";

import Header from "./componenst/Header/Header";
import HeroSection from "./componenst/Hero/HeroSection";
import About from "./componenst/About/About";
import Experience from "./componenst/Experience/Experience";
import Footer from "./componenst/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default App;
