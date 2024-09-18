import React from "react";
let logo = "/assests/images/logofinalfinalfinal.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white ">
        <div className="row px-5 py-4 footercustom">
          <div className="col-md-4 col-12 text-center text-md-start mb-4 mb-md-0">
            <img src={logo} width="220px" alt="logo" />
            <p className="fs-4 mt-3">Bringing Your Visual Dreams to Life.</p>
          </div>
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="footernav">
              <div>
                <a href="/" className="text-white">Home</a>
              </div>
              <div>
                <a href="/about" className="text-white">About</a>
              </div>
              <div>
                <a href="#" className="text-white">Advertising</a>
              </div>
              <div>
                <a href="/contact" className="text-white">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <div className="footernav">
              <div>
                <a href="#" className="text-white">Facebook</a>
              </div>
              <div>
                <a href="#" className="text-white">Instagram</a>
              </div>
              <div>
                <a href="#" className="text-white">Twitter</a>
              </div>
              <div>
                <a href="#" className="text-white">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-center text-white pt-3 pb-3">
        @2024 YUVMEDIA STUDIO All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
