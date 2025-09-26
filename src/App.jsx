import React from "react";
import Navbar from "./components/navbar";  // Corrected capitalization
import Home from "./components/home"; 
import About from "./components/about";  
import Portfolio from "./components/portfolio";    // Corrected capitalization
import Experience from "./components/experience";
import Footer from "./components/footer";
import Contact from "./components/contact"

function App() {
  return (
    <>
      <Navbar />  
      <Home /> 
      <About/> 
      <Portfolio/>  
      <Experience />
      <Contact/>
      <Footer />

    </>
  );
}

export default App;
