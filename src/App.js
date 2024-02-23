import React from "react";
// import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
    </Routes>
  );
}

export default App;
