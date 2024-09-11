import React from "react";
const images = [
  "assests/images/officeone.jpg",
  "assests/images/officetwo.jpg",
  "assests/images/officethree.jpg",
];
const JoinSection = () => {
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
