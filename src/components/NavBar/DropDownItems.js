import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const listItemsVariants = {
  open: {
    x: 0,
    opacity: 1,
    // display: 'unset',
    visibility: "visible",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    visibility: "hidden",
    // display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function DropDownItems({ setIsOpen, isOpen }) {
  const [showList, setShowList] = useState(isOpen);

  useEffect(() => {
    var timeOut = null;
    if (isOpen) setShowList(true);
    else {
      timeOut = setTimeout(() => {
        setShowList(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [isOpen]);

  return showList ? (
    <motion.ul className="list" variants={listVariants}>
      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">
            <span>Home</span>
          </div>
        </Link>
      </motion.li>

      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="cv"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">CV</div>
        </Link>
      </motion.li>

      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="publications"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">
            <span>Publication</span>
          </div>
        </Link>
      </motion.li>

      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="conferences"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">
            <span>Conference</span>
          </div>
        </Link>
      </motion.li>

      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="teachings"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">
            <span>Teaching</span>
          </div>
        </Link>
      </motion.li>

      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">
            <span>Certificate</span>
          </div>
        </Link>
      </motion.li>

      <motion.li
        variants={listItemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="item"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          offset={5}
          onClick={() => setIsOpen(false)}
        >
          <div className="iconText center">
            <span>Contact</span>
          </div>
        </Link>
      </motion.li>
    </motion.ul>
  ) : null;
}

export default DropDownItems;
