import "./App.css";
import accordionData from "./Data/accordionData.json";
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
        <Experience accordion={accordionData} />
        <Footer />
      </main>
    </>
  );
}

export default App;
