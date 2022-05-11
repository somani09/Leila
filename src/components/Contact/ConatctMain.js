import React from "react";
// import Head from "../common/head/Head";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../data/variants";
import { contactData } from "../../data/contactData";
import { socialsData } from "../../data/socialsData";
import SocialArea from "./SocialArea";
import NavBar from "../NavBar/NavBar";
// import Form from "./Form";

function ConatctMain() {
  return (
    <div className="contact flex-col">
      {/* <Head title="CONTACT" text={contactData.contactIntro} /> */}
      <NavBar />
      <motion.div className="content" variants={fadeInVariant}>
        {/* <Form /> */}

        <SocialArea contactData={contactData} socialsData={socialsData} />
      </motion.div>
    </div>
  );
}

export default ConatctMain;
