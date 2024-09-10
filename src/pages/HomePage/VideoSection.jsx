import React from "react";
import { Tilt } from "react-tilt";
let videoone = "assests/images/Sliderone.mp4";


const VideoSection = () => {
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
        <div className="banner text-center">
          <video
            className="bannervideo"
            autoPlay
            muted
            loop
            src={videoone}
          ></video>
          <video
            className="bannerreflection"
            src={videoone}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </Tilt>
    </div>
  );
};

export default VideoSection;
