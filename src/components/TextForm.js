import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase function invoked")
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("UpperCase function invoked")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handlyExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    // console.log("onchange function invoked")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}> Convert to UpperCase </button>
        <button className="btn btn-primary m-1" onClick={handleLowClick}> Convert to LowerCase </button>
        <button className="btn btn-primary m-1" onClick={handleCopy}> Copy the text </button>
        <button className="btn btn-primary m-1" onClick={handlyExtraSpaces}> Remove Extra Spaces </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
