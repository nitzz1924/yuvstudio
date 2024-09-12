import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const AboutSection = () => {
  useEffect(() => {
    // Selecting the target element
    const aboutHeading = document.querySelector("#vfx");

    // Define the GSAP animation for hover
    const hoverAnimation = gsap.to(aboutHeading, {
      duration: 1,
      ease: "slow(0.7,0.7,false)",
      x: 100,
      text: {
        value: "WE", // Change to desired text
      },
      paused: true, // Pause the animation initially
    });

    // Add event listeners for mouse enter and leave
    aboutHeading.addEventListener("mouseenter", () => hoverAnimation.play());
    aboutHeading.addEventListener("mouseleave", () => hoverAnimation.reverse());

    // Cleanup event listeners on component unmount
    return () => {
      aboutHeading.removeEventListener("mouseenter", () =>
        hoverAnimation.play()
      );
      aboutHeading.removeEventListener("mouseleave", () =>
        hoverAnimation.reverse()
      );
    };
  }, []);
  return (
    <div className="container-fluid p-5 aboutsec">
      <div className="row">
        <div className="col-md-4">
          <div className="text-white aboutheading text-end">ABOUT</div>
        </div>
        <div className="col-md-4">
          <div className="text-white maintext" id="vfx">
            VFX
          </div>
        </div>
        <div className="col-md-4  text-start d-flex align-items-center justify-content-start">
          <div className="text-white details">
            SINCE 2020
            <br />
            WE STAY CLOSE TO
            <br />
            THE ALL CREATORS
          </div>
        </div>
      </div>
      <div className="row">
        <div className="text-white maintext text-center">COMPANY BASED</div>
      </div>
      <div className="row">
        <div className="col-md-3  text-start d-flex align-items-end justify-content-end">
          <div className="text-white details">
            We deliver the heart-stirring
            <br />
            sensation to the audience and
            <br />
            all those involved in our work.
          </div>
        </div>
        <div className="col-md-7 text-white text-end maintext">IN INDIA</div>
      </div>
    </div>
  );
};

export default AboutSection;
