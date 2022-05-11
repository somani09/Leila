import React from "react";
import { aboutData } from "../../data/aboutData";
import ImageLoop from "./ImageLoop";
import InfoRow from "./InfoRow";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../data/variants";

function AboutMain() {
  return (
    <motion.div className="about flex-col" variants={fadeInVariant}>
      <div className="heading">HOME</div>
      <div className="content">
        <div className="imageLoop">
          <ImageLoop images={aboutData.loopImages} />
        </div>
        <div className="aboutMeData">
          <div className="subHeading">{aboutData.subHeading}</div>
          <div className="addInfo">{aboutData.moreInfo1}</div>
          <br />
          <div className="addInfo">{aboutData.moreInfo2}</div>
          <br />
          <div className="addInfo">{aboutData.moreInfo3}</div>
          <br />
          <div className="addInfo">{aboutData.moreInfo4}</div>
          <br />
          <div className="addInfo">{aboutData.moreInfo5}</div>

          {/* <div className="basicInfo">
            <div className="basicInfoCol">
              {aboutData.info.map(
                (x, i) =>
                  i < 3 && <InfoRow key={i} title={x.title} value={x.value} />
              )}
            </div>
            <div className="basicInfoCol">
              {aboutData.info.map(
                (x, i) =>
                  i >= 3 && <InfoRow key={i} title={x.title} value={x.value} />
              )}
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMain;
