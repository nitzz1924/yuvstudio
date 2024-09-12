import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.css";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Outlet } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

function App() {
  // let [smoother, setsmoother] = useState(null);
  // useEffect(() => {

  //   if (window.ScrollSmoother) {
  //     smoother = window.ScrollSmoother.create({
  //       wrapper: ".App",
  //       content: ".content",
  //       smooth: 1,
  //       effects: true,
  //     });
  //   }

  //   // Cleanup function
  //   return () => {
  //     if (smoother) {
  //       smoother.kill(); // Properly remove the smoother instance
  //     }
  //   };
  // }, [smoother]);



  return (
    <div className="App">
      <Canvas />
      <div className="content">
      <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

// Throttle function definition
function throttle(callback, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return callback(...args);
  };
}

export default App;
