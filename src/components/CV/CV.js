import React from "react";
import NavBar from "../NavBar/NavBar";
import "./cv.scss";
const CV = () => {
  return (
    <div className="h100 cvCover">
      <NavBar />
      <iframe
        className="cv"
        src="https://drive.google.com/file/d/1GIC39MdLgs454vM7J5BmJzTsUmfA8zjD/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default CV;
