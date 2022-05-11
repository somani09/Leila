import React from "react";
import { teachingData } from "../../data/teachingData";
import NavBar from "../NavBar/NavBar";
import "./teaching.scss";
const Teaching = () => {
  return (
    <div className="mainContainer center-col">
      <NavBar />

      <div className="publications">
        <div className="heading">Teaching</div>
        <div className="pubArea">
          {teachingData.info.map((x, i) => (
            <div>
              <div className="pubYr">{x.college}</div>
              {x.teachings.map((y, i) => (
                <div className="pub">
                  <div>{y.sub}</div>
                  <div className="links">
                    <a href={y.link}>{y.link}</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teaching;
