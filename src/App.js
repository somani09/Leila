import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useHistory,
} from "react-router-dom";
import { motion } from "framer-motion";

import "./App.scss";
import "./variables.scss";
import "./flex.scss";

import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Background from "./components/Background";
import DropDown from "./components/NavBar/DropDown";
import DropDownNav from "./components/NavBar/DropDownNav";

const About = lazy(() => import("./components/About/About"));
const Conferences = lazy(() => import("./components/Conferences/Conferences"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const CV = lazy(() => import("./components/CV/CV"));
const Home = lazy(() => import("./components/Home/Home"));
const Publications = lazy(() =>
  import("./components/Publications/Publications")
);
const Skills = lazy(() => import("./components/Skills/Skills"));
const Teaching = lazy(() => import("./components/Teachings/Teaching"));

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    <Navigate to="/" />;
  }, []);

  return (
    <motion.div className="App" initial="initial" animate="animate" exit="exit">
      <Router>
        {/* <DropDown /> */}
        <DropDownNav />
        <Suspense fallback={<div className="loading-wrap">Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home setLoaded={setLoaded} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/conferences" element={<Conferences />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cv" element={<CV />} />
            <Route exact path="/publications" element={<Publications />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/teachings" element={<Teaching />} />
            <Route path="*" element={<Home setLoaded={setLoaded} />} />
          </Routes>
        </Suspense>
      </Router>
    </motion.div>
  );
}

export default App;
