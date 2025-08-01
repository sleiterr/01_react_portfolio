import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";

import ProjectDetail from "./pages/projectDetail/ProjectDetail";

function App() {
  return (
    <>
      <Header />
      <ScrollToHash />
      <main className="bg-projects-gradient">
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
