import "./App.css";
import Header from "./componenst/Header/Header";
import HeroSection from "./componenst/Hero/HeroSection";
import About from "./componenst/About/About";
import Footer from "./componenst/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
