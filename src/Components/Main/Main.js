import React from "react";
import "./Main.css";
import Cloud from "../Main/Background/Cloud";

export default function Main() {
  const params = [
    {
      width: 117,
      height: 75,
      top: 150,
      left: "50%"
    },
    {
      width: 150,
      height: 100,
      top: 250,
      left: "25%"
    },
    {
      width: 70,
      height: 50,
      top: 350,
      left: "65%"
    }
  ];

  return (
    <div className="main-container">
      <Cloud param={params[0]} />
      <Cloud param={params[1]} />
      <Cloud param={params[2]} />
      <h1 className="main-title">RANDOM TEXT SENTENCE</h1>
      <p className="main-desc">
        You get a random sentence, everybody gets a random sentence , who wants
        a random sentence?
      </p>
      <div className="main-buttons">
        <button className="primary-button main-align">
          <a href="#generate-container">Sentence Please</a>
        </button>
        <button className="secondary-button main-align">
          <a href="#review" className="no-thanks">No Thanks, No Sentece Please</a> 
        </button>
      </div>
    </div>
  );
}
