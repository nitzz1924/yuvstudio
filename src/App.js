import React, { useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./pages/HomePage/HeroSection";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/HomePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    if (window.ScrollSmoother) {
      const smoother = window.ScrollSmoother.create({
        wrapper: ".App",
        content: ".content",
        smooth: 1,
        effects: true
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="content"> 
        <Canvas />
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
