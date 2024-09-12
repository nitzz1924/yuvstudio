import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import "./Workslider.css";

gsap.registerPlugin(ScrollTrigger);

// Import images
const images = [
  "assests/images/posters/Argylle.jpg",
  "assests/images/posters/Secret Headquarters.jpg",
  "assests/images/posters/The Witcher.jpg",
  "assests/images/posters/House of Dragons.jpg",
  "assests/images/posters/Resident Evil.jpg",
  "assests/images/posters/The women & The Sea.jpg",
  "assests/images/posters/Rebel Moon.jpg",
  "assests/images/posters/Mirzapur.jpg",
  "assests/images/posters/12th Fail.jpg",
  "assests/images/posters/Fukery 3.jpg",
  "assests/images/posters/Stranger things.webp",
];

const WorkSection = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const demoWrapperRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(
      demoWrapperRef.current.querySelectorAll("img")
    );
    const loader = loaderRef.current;

    const updateProgress = (instance) => {
      const progress = Math.round(
        (instance.progressedCount * 100) / images.length
      );
      setLoadingProgress(progress);
    };

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(loader, { autoAlpha: 0, duration: 1 });

      gsap.utils
        .toArray(demoWrapperRef.current.querySelectorAll("section"))
        .forEach((section, index) => {
          const wrapper = section.querySelector(".wrapper");
          if (wrapper) {
            const [x, xEnd] =
              index % 2
                ? ["100%", (wrapper.scrollWidth - section.offsetWidth) * -1]
                : [wrapper.scrollWidth * -1, 0];
            gsap.fromTo(
              wrapper,
              { x },
              {
                x: xEnd,
                scrollTrigger: {
                  trigger: section,
                  scrub: 0.5,
                  start: "top bottom",
                  end: "top top",
                },
              }
            );
          }
        });
    };

    imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
  }, []);

  return (
    <div className="demo-wrapper" ref={demoWrapperRef}>
      <div className="loader df aic jcc" ref={loaderRef}>
        <h1>Loading</h1>
        <h2 className="loader--text">{loadingProgress}%</h2>
      </div>

        <section className="demo-text">
            <div className="wrapper text">OUR WORK</div>
        </section>

      {Array.from({ length: 4 }).map((_, sectionIndex) => (
        <section className="demo-gallery" key={sectionIndex}>
          <ul className="wrapper">
            {images.map((imgSrc, imgIndex) => (
              <li key={imgIndex}>
                <img
                  src={imgSrc}
                  width="400"
                  height="500"
                  alt={`Gallery Image ${imgIndex}`}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="demo-text">
        <div className="wrapper text">WE DO BEST WORK</div>
      </section>
    </div>
    
  );
};

export default WorkSection;
