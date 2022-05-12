import React from "react";
import NavBar from "../NavBar/NavBar";
import { cvData } from "../../data/cvData";
import "./cv.scss";
const CV = () => {
  return (
    <div className="h100 cvCover">
      <NavBar />
      <iframe
        className="cv"
        src={cvData.cvGoogleDrive}
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default CV;
