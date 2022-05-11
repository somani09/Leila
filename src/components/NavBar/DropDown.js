import React from "react";
import { Link } from "react-router-dom";
import "./dropDown.scss";
const DropDown = () => {
  return (
    <div className="dropDown">
      <div className="navBar col-new justify-center align-center">
        <div className="linkCover ">
          <Link className="links" to="/">
            Home
          </Link>
        </div>

        <div className="linkCover ">
          <Link className="links" to="/cv">
            CV
          </Link>
        </div>
        <div className="linkCover ">
          <Link className="links" to="/publications">
            Publication
          </Link>
        </div>
        <div className="linkCover ">
          <Link className="links" to="/conferences">
            Conference
          </Link>
        </div>
        <div className="linkCover ">
          <Link className="links" to="/teachings">
            Teaching
          </Link>
        </div>
        <div className="linkCover ">
          <Link className="links" to="/skills">
            Certificate
          </Link>
        </div>
        <div className="linkCover ">
          <Link className="links" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
