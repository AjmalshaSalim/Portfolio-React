import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Skills } from './components/Skills';
import { gsap } from "gsap";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 })
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, 
[]
);
  return (
    <>
    
    <div className="ball bg-lime-600 w-4 h-4 fixed top-0 left-0 rounded-full z-5"></div> 
      <div className="ball bg-lime-500 w-4 h-4 fixed top-0 left-0 rounded-full z-5"></div>  
      <div className="ball bg-lime-300 w-4 h-4 fixed top-0 left-0 rounded-full z-5"></div>  
      <div className="ball bg-lime-300 w-4 h-4 fixed top-0 left-0 rounded-full z-5"></div>  
      <div className="ball bg-white w-4 h-4 fixed top-0 left-0 rounded-full z-5"></div>
      
    
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Courses/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
