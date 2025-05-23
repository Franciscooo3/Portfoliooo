import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project/>
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
