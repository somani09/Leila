import React, { useState, useEffect } from "react";
import "./home.scss";
import { SiGooglescholar } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { SiResearchgate } from "react-icons/si";
import { SiPublons } from "react-icons/si";
import { SiOrcid } from "react-icons/si";

// import logo from '../../assets/images/logo.png'
import { motion } from "framer-motion";
import Typer from "../../Typer";
import { socialsHomeVariants } from "../../data/variants";
import { socialsData } from "../../data/socialsData";
import Background from "../Background";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";

function Home({ setLoaded }) {
  // const [iconsDelay, setIconsDelay] = useState(8)
  const iconsDelay = 0;
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");

  useEffect(() => {
    const nameTimeout = setTimeout(() => {
      setName((value) => value + "Leila");
    }, 200);
    const desTimeout = setTimeout(() => {
      setDescr((value) => value + "PHD Student");
    }, 3500);
    return () => {
      clearTimeout(desTimeout);
      clearTimeout(nameTimeout);
    };
  }, []);

  return (
    <div className="home-about">
      <div id="home" className="home flex-row">
        <Background setLoaded={setLoaded} />

        <div className="intro flex-col">
          <div className="title homeTitle">Leila Gholami</div>
          <div className="heading desc">Ph.D. in Applied Linguistics</div>
          <div className="socials flex-row">
            <motion.a
              target="_blank"
              rel="noreferrer"
              href={socialsData.googleScholar}
              variants={socialsHomeVariants}
              custom={[1, iconsDelay]}
            >
              <SiGooglescholar className="socialIcons" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href={socialsData.linkedin}
              variants={socialsHomeVariants}
              custom={[2, iconsDelay]}
            >
              <ImLinkedin className="socialIcons" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href={socialsData.researchGate}
              variants={socialsHomeVariants}
              custom={[3, iconsDelay]}
            >
              <SiResearchgate className="socialIcons" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href={socialsData.orcid}
              variants={socialsHomeVariants}
              custom={[4, iconsDelay]}
            >
              <SiOrcid className="socialIcons" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noreferrer"
              href={socialsData.publons}
              variants={socialsHomeVariants}
              custom={[5, iconsDelay]}
            >
              <SiPublons className="socialIcons" />
            </motion.a>
            {/* <motion.a
            target="_blank"
            rel="noreferrer"
            className="socialIconsLogo"
            href={socialsData.somaniMusic}
            variants={socialsHomeVariants}
            custom={[3, iconsDelay]}
          >
            <img src={logo} className="socialIconsLogo" alt="logo" />
          </motion.a> */}
          </div>
        </div>
      </div>
      <div className="navHome">
        <NavBar />
      </div>
      <About />
    </div>
  );
}

export default Home;
