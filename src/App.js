import React, {useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./pages/HomePage/HeroSection";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/HomePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { gsap, ScrollTrigger } from "gsap";
function App() {
  useEffect(() => {
    gsap.to(".App", {
      scrollTrigger: {
        trigger: ".App",
        start: "top",
        end: "bottom",
        scrub: true,
      },
      opacity: 1,
    });
  }, []);
  return (
    <div className="App">
      <Canvas />
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
