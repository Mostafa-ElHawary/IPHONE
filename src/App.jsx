import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlights from "./components/Hightlight";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks/>
      <Footer/>
    </>
  );
};

export default App;
