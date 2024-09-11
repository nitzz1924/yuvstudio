import React from "react";
let logo = "/assests/images/newfinal.png";
const Footer = () => {
  return (
    <>
     <div className="container-fluid">
      <div className="row px-5 ">
        <div className="footercustom px-5">
          <div className="col-md-4 logoheadingfooter text-start">
            <img src={logo} width="220px" alt="logo"/>
            <p className="fs-4 text-white">Bringing Your Visual Dreams to Life.</p>
          </div>
          <div className="col-md-4 text-white">
            <div className="footernav">
                <div><a href="">Home</a></div>
                <div><a href="">About</a></div>
                <div><a href="">Advertising</a></div>
                <div><a href="">Contact</a></div>
            </div>
          </div>
          <div className="col-md-4 text-white">
          <div className="footernav">
                <div><a href="">Facebook</a></div>
                <div><a href="">Instagram</a></div>
                <div><a href="">Twitter</a></div>
                <div><a href="">WhatsApp</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center text-white pt-3 pb-3">
        @2024 YUVMEDIA STUDIO All Rights Reserved.
    </div>
    </>
  );
};

export default Footer;
