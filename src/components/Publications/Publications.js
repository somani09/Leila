import React from "react";
import "./publications.scss";
import { publicationData } from "../../data/publicationData";
import NavBar from "../NavBar/NavBar";

const Publications = () => {
  return (
    <div className="mainContainer center-col">
      <NavBar />

      <div className="publications">
        <div className="heading">Publications</div>
        <div className="pubArea">
          {publicationData.info.map((x, i) => (
            <div>
              <div className="pubYr">{x.year}</div>
              {x.publications.map((y, i) => (
                <div className="pub">
                  <div>{y.pub}</div>
                  <div className="links">
                    <a href={y.link} target="_blank">
                      {y.link}
                    </a>
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

export default Publications;
