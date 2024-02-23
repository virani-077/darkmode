import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");

  const handleONChange = (e) => {
    setText(e.target.value);
  };

  const changeUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const changeLo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const clear = () => {
    let newText = "";
    setText(newText);
    props.show("Text is clear", "Success");
  };

  const clearExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const remove = () => {
    let Text = text.slice(0, -1);
    setText(Text);
  };

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleONChange}
            className="form-control"
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={changeUp}
        >
          toUpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={changeLo}
        >
          toLowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={clearExtraSpace}
        >
          Remove Exra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={remove}
        >
          Clear
        </button>
      </div>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h3>Your Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          Word{text.length} character{" "}
        </p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Form;
