import React from "react";
const AboutSection = () => {
  return (
    <div className="container-fluid p-5 aboutsec">
      <div className="row">
        <div className="col-md-4">
          <div className="text-white aboutheading text-end">ABOUT</div>
        </div>
        <div className="col-md-4">
          <div className="text-white maintext">VFX</div>
        </div>
        <div className="col-md-4  text-start d-flex align-items-center justify-content-start">
          <div className="text-white details">SINCE 2020<br/>WE STAY CLOSE TO<br/>THE ALL CREATORS</div>
        </div>
      </div>
        <div className="row">
            <div  className="text-white maintext text-center">COMPANY BASED</div>
        </div>
        <div className="row">
            <div className="col-md-3  text-start d-flex align-items-end justify-content-end">
                <div className="text-white details">We deliver the heart-stirring<br/>sensation to the audience and<br/>all those involved in our work.</div>
            </div>
            <div  className="col-md-7 text-white text-end maintext">IN INDIA</div>
        </div>
    </div>
  );
};

export default AboutSection;
