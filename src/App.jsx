import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";

import ProjectDetail from "./pages/projectDetail/ProjectDetail";

function App() {
  return (
    <>
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
