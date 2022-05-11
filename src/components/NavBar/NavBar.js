import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss";
const NavBar = () => {
  return (
    <div className="navBar row-new justify-center align-center">
      <div className="linkCover ">
        <Link className="links" to="/">
          Home
        </Link>
      </div>
      {/* <div className="linkCover ">
        <Link className="links" to="/about">
          About
        </Link>
      </div> */}
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
  );
};

export default NavBar;
