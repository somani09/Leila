import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { SiGooglescholar } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { SiResearchgate } from "react-icons/si";
import { SiPublons } from "react-icons/si";
import { SiOrcid } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";

function SocialArea({ contactData, socialsData }) {
  function sendSocials(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="socialsArea1">
      <div className="contactTypes">
        <div
          onClick={() => sendSocials(`mailto:${contactData.email}`)}
          className="typeBox email-phone"
        >
          <div className="contactIconContainer center">
            <SiGmail className="contactIcons" />
          </div>

          <div className="subHeading">Email</div>
          <div className="emailAdd center">{contactData.email}</div>
        </div>

        <div className="typeBox">
          <div className="contactIconContainer center">
            <BiShareAlt className="contactIcons" />
          </div>
          <div className="subHeading">Media</div>
          <div className="socialIconsList flex-col">
            <div>
              <a
                href={socialsData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="socialsIconContainer center"
              >
                <ImLinkedin className="socialsIcon" />
              </a>
              <a
                href={socialsData.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="socialsIconContainer center"
              >
                <SiGooglescholar className="socialsIcon" />
              </a>
              <a
                href={socialsData.researchGate}
                target="_blank"
                rel="noreferrer"
                className="socialsIconContainer center"
              >
                <SiResearchgate className="socialsIcon" />
              </a>
            </div>
            <div>
              <a
                href={socialsData.orcid}
                target="_blank"
                rel="noreferrer"
                className="socialsIconContainer center"
              >
                <SiOrcid className="socialsIcon" />
              </a>
              <a
                href={socialsData.publons}
                target="_blank"
                rel="noreferrer"
                className="socialsIconContainer center"
              >
                <SiPublons className="socialsIcon" />
              </a>
            </div>
          </div>
        </div>

        <div
          onClick={() => sendSocials(`tel:${contactData.phone}`)}
          className="typeBox email-phone"
        >
          <div className="contactIconContainer center">
            <MdCall className="contactIcons" />
          </div>
          <div className="subHeading">Phone</div>
          <div className="emailAdd center">{contactData.phone}</div>
        </div>
      </div>
    </div>
  );
}

export default SocialArea;
