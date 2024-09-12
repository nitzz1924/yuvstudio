import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const images = [
  "assests/images/officeone.jpg",
  "assests/images/officetwo.jpg",
  "assests/images/officethree.jpg",
];
const JoinSection = () => {
  useEffect(() => {
    // Selecting the target element
    const aboutHeading = document.querySelector(".joinusheadingtxt");

    // Define the GSAP animation for hover
    const hoverAnimation = gsap.to(aboutHeading, {
      duration: 1,
      scale: 1.2, // Scale up for bounce effect
      x:100,
      ease: "bounce.out", // Apply bounce easing
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
    <div className="container-fluid p-0 joinsec">
      <div className="row">
        {images.map((imgsrc, index) => (
          <div className="col-md-4 imgdivs" key={index}>
            <img
              src={imgsrc}
              width="100%"
              height="100%"
              alt={`Gallery Image ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="joinusrow">
        <div className="row">
          <div className="col-md-4 text-white joinusheadingtxt">JOIN US</div>
          <div className="col-md-8 text-white ps-5 d-flex align-items-center justify-content-start joinustxt">
            Yuvmedia Studio is the visual effect company
            <br />
            for the feature film, TV,
            <br />
            advertising and music industries
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
