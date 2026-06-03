import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
