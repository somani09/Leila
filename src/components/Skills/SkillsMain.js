import React from "react";
// import Head from '../common/head/Head'
import Skill from "./Skill";
import { motion } from "framer-motion";
import { skillsData } from "../../data/skillsData";
import { fadeInVariant } from "../../data/variants";
import NavBar from "../NavBar/NavBar";

import award from "../../assets/images/Editor.JPG";

function SkillsMain() {
  return (
    <div className="skills flex-col">
      {/* <Head title="SKILLS" text={skillsData.text} /> */}
      <NavBar />

      <motion.div className="content" variants={fadeInVariant}>
        <div className="certificates-col text-left ">
          <div className="subHeading text-center mb-10">Editor's Pick</div>
          <img src={award} />
        </div>
        <div className="certificates-col text-left ">
          <div className="subHeading text-center mb-10">Certificates</div>
          {skillsData.certificates.map((x, i) => (
            <div className="certificates">
              <div className="name">{x.name}</div>
              <div className="college">{x.college}</div>
              <div className="date">{x.date}</div>
            </div>
          ))}
        </div>
        <div className="skills-col">
          <div className="subHeading text-center">Skills</div>
          {skillsData.language.map((x, i) => (
            <Skill key={i} i={i} name={x.name} percent={x.percent} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsMain;
