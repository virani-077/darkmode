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
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      show("Dark Mode has been enabled", "Success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      show("Light mode has been enabled", "Success");
    }
  };

  return (
    <div className={`bg-${darkMode === "dark" ? "dark" : "light"}`}>
      <NavBar mode={darkMode} btn={toggleDarkMode} />
      <Alert alert={alert} />
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Form heading="Enter Text" mode={darkMode} show={show} />
            <About mode={darkMode} path="/About" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
