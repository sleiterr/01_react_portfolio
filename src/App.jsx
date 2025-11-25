import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Home from "./pages/home/Home";

import ProjectDetail from "./pages/projectDetail/project-detail";

function App() {
  return (
    <>
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
