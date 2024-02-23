import React from "react";

const About = (props) => {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#515559" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };
  return (
    <>
      <div className="card" style={mystyle}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
