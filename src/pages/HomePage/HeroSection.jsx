import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Ensure you have the relevant CSS for animation


const HeroSection = () => {
  const [items, setItems] = useState([
    {
      src: "assests/images/Sliderone.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
    {
      src: "assests/images/Slidertwo.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
    {
      src: "assests/images/Sliderthree.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
    {
      src: "assests/images/sliderfour.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
  ]);

  const autoSlideRef = useRef(null);
  const carouselRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const showSlider = (type) => {
    const carousel = carouselRef.current;
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;

    // Disable buttons during animation
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

    // Remove existing animation classes
    carousel.classList.remove("next", "prev");

    // Trigger reflow to restart animations
    void carousel.offsetWidth;

    // Update items and add animation class for carousel
    if (type === "next") {
      setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]); // Shift items
      carousel.classList.add("next"); // Add class for CSS animation
    } else {
      setItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, prevItems.length - 1),
      ]); // Shift items
      carousel.classList.add("prev"); // Add class for CSS animation
    }

    // Re-enable buttons after animation ends
    setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 1000); // Adjust timeout to match CSS animation duration
  };

  const handleNext = () => {
    showSlider("next");
  };

  const handlePrev = () => {
    showSlider("prev");
  };

  const handleSeeMore = () => {
    document.querySelector(".carousel").classList.add("showDetail");
  };

  const handleBack = () => {
    document.querySelector(".carousel").classList.remove("showDetail");
  };

  useEffect(() => {
    // Set interval for auto sliding
    // autoSlideRef.current = setInterval(() => {
    //   showSlider('next');
    // }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlideRef.current);
  }, []);

  return (
    <>
      <marquee
        behavior=""
        direction=""
        width="500"
        loop
        scrolldelay="10"
        class="marqueetext"
      >
        VFX & ADVERTISING CO.
      </marquee>
      <div className="carousel" ref={carouselRef}>
        <div className="list">
          {items.map((item, index) => (
            <div className="item" key={index}>
                <video
                  className="videocustom"
                  autoPlay
                  muted
                  loop
                  src={item.src}
                ></video>
                <video
                  className="reflection"
                  src={item.src}
                  autoPlay
                  loop
                  muted
                ></video>
                <div className="introduce">
                  <div className="title">{item.title}</div>
                  <div className="topic">{item.topic}</div>
                  <button className="custombtnshero mt-3" onClick={handleSeeMore}>
                    SEE MORE &#8599;
                  </button>
                </div>
                <div className="detail">
                  <div className="title">Aerphone GHTK</div>
                  <div className="des">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor, reiciendis suscipit nobis nulla animi, modi explicabo
                    quod corrupti impedit illo, accusantium in eaque nam quia
                    adipisci aut distinctio porro eligendi. Reprehenderit
                    nostrum consequuntur ea! Accusamus architecto dolores modi
                    ducimus facilis quas voluptatibus! Tempora ratione
                    accusantium magnam nulla tenetur autem beatae.
                  </div>
                  <div className="specifications">
                    <div>
                      <p>Used Time</p>
                      <p>6 hours</p>
                    </div>
                    <div>
                      <p>Charging port</p>
                      <p>USB-C</p>
                    </div>
                    <div>
                      <p>Weight</p>
                      <p>200g</p>
                    </div>
                  </div>
                  <div className="checkout">
                    <button>Checkout</button>
                    <button>More Details</button>
                  </div>
                </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" ref={prevButtonRef} onClick={handlePrev}>
            ❮
          </button>
          <button id="next" ref={nextButtonRef} onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
