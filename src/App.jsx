import React, { useEffect} from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { loadGoogleAnalytics } from "./utils/gtag.js";
import CookieModal from "./components/CookieModal/CookieModal.jsx";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Home from "./pages/home/Home";

import ProjectDetail from "./pages/projectDetail/project-detail";

function App() {
  useEffect(() => { 
    if (localStorage.getItem("cookiesConset") === 'accepted') { 
      loadGoogleAnalytics();
    }
  }, [])

  return (
    <>
      <CookieModal/>
      <main className="bg-projects-gradient min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
