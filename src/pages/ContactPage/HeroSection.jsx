import React, { useState, useEffect, useRef } from "react";
const HeroSection = () => {
  return (
    <div className="container contactsec">
      <div className="row">
        <div className="col-md-12">
          <div className="text-white contactheading">CONTACT US</div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-start">
          <div className="text-white businessdetailstxt">
          For immediate assistance or to discuss your project over the phone, please don’t hesitate to give us a call. Our team is ready to provide you with the information you need.
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="col-md-12">
        <div className="text-white phone">
          <span>
            For phone inquiries&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <a href="#">TEL: +91-0000000000</a>
        </div>
      </div>
      <hr className="hr" />
      <div className="col-md-12">
        <div className="text-white phone">
          <span>
            Email Us at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <a href="#">support@yuvmediastudio.com</a>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default HeroSection;
