import React from "react";
import { confereceData } from "../../data/conferenceData";
import NavBar from "../NavBar/NavBar";
import "./conferences.scss";
const Conferences = () => {
  return (
    <div className="mainContainer center-col">
      <NavBar />

      <div className="conference">
        <div className="heading">Flagship Conference Presentations</div>
        <div className="conArea">
          {confereceData.info.map((x, i) => (
            <div className="singleCon">
              <div className="conHead">{x.Heading}</div>
              <div className="conInfo">{x.info}</div>
              <div className="date">{x.date}</div>
              <a className="link" href={x.link}>
                link-
                {x.link}
              </a>

              <div className="mt-20">
                ------------------------------------------------------------------------
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conferences;
