import React from "react";
import "./Desc.css";
import Read from "./Read";

export default function Desc() {
  return (
    <div className="desc-container">
      <div className="desc-column">
        <h2 className="font1 desc-title">
          Uplift your day by reading a random sentece
        </h2>
        <h2 className="font1 desc-nd-title">by sentence.com</h2>
        <div>
          <p className="font2 desc-q">Test your Luck</p>
          <p className="font2 desc-a">
            Test your Luck Maybe you will get a great sentece or maybe not, Who
            know? See whether if the sentence is a good one
            or a bad one.
          </p>
        </div>
        <div>
          <p className="font2 desc-q">Inspired by the sentece</p>
          <p className="font2 desc-a">
            Here is a great quote by Edward which really inspiring{" "}
          </p>
          <p className="font2 desc-a">
            “I take random inspiration from everywhere. ” -Edward Enninful
          </p>
        </div>
      </div>
      <div className="desc-column mobile-hide">
        <Read/>
      </div>
    </div>
  );
}
