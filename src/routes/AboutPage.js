import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import About from "../Component/About";

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState("light");

  const toggleDarkMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  };
  return (
    <>
      <NavBar mode={darkMode} btn={toggleDarkMode} />
      <div className="container mt-5">
        <About mode={darkMode} path="/About" />
      </div>
    </>
  );
};

export default AboutPage;
