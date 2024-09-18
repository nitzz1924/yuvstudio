import React, { useState, useRef, useEffect } from "react";
import { Tilt } from "react-tilt";

let videoone = "assests/images/Sliderone.mp4";
let videotwo = "assests/images/Sliderthree.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(videoone); // State to track the current video
  const [isFlipped, setIsFlipped] = useState(false); // State to track the flip

  useEffect(() => {
    const videoElement = videoRef.current;

    // Play the video on hover and keep it playing
    const handlePlay = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.error("Video play was interrupted", error);
        });
      }
    };

    if (videoElement) {
      // Ensure video plays when component mounts and on hover
      handlePlay();
      videoElement.addEventListener("mouseenter", handlePlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("mouseenter", handlePlay);
      }
    };
  }, [currentVideo]);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      // Toggle between videos and flip the div
      setIsFlipped((prev) => !prev);
      setCurrentVideo((prev) => (prev === videoone ? videotwo : videoone));
    }, 5000); // Flip every 5 seconds

    return () => clearInterval(flipInterval); // Cleanup the interval on component unmount
  }, []);

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 9000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="container-fluid videosec">
      <Tilt options={defaultOptions}>
        <div className={`banner text-center ${isFlipped ? "flipped" : ""}`} style={{ pointerEvents: 'none' }}>
          <video
            ref={videoRef}
            className="bannervideo"
            autoPlay
            muted
            loop
            src={currentVideo} // Dynamically change video src
          ></video>
          <video
            className="bannerreflection"
            autoPlay
            muted
            loop
            src={currentVideo} // Dynamically change video src
          ></video>
        </div>
      </Tilt>
    </div>
  );
};

export default VideoSection;
