import React, { useState } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import Alert from "./Alert";
import About from "./About";

const Home = () => {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const show = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    // setDarkMode(prevMode => !prevMode);
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      show("Dark Mode has been Enable", "Success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      show("Ligt mode has been Enable", "Success");
    }
  };

  return (
    <>
      <NavBar mode={darkMode} btn={toggleDarkMode} />
      <Alert alert={alert} />
      <div className="container">
        <Form heading="Enter Text" mode={darkMode} show={show} />
        <About mode={darkMode} path="/About" />
      </div>
    </>
  );
};

export default Home;
