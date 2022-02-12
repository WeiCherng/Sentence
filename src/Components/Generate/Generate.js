import React, { useState } from "react";
import "./Generate.css";

export default function Generate() {
  const [sentence, setSentence] = useState({ sentence: "" });
  // const [loading, setLoading] = useState(false)

  const getData = async () => {
    const url = "https://secret-sierra-55072.herokuapp.com/sentence";
    const response = await fetch(url).catch((err) =>
      setSentence({ sentence: "Could Not Get A Random Sentence" })
    );
    const data = await response.json();
    if (data && data !== sentence) {
      setSentence(data);
    }
  };

  return (
    <div id="generate-container">
      <div className="generate-innerCont">
        <h3 className="generate-title">Generate Random Sentence</h3>
        <p className="generate-desc">
          Try the sentence generator to create unique, unrelated and out of
          contect sentece for your daily life. Click on the generate button to
          get your totally random sentence by a totally random stranger from the
          internet!
        </p>
        <div className="box">
          <div className="inner-box box-align">
            <div className="sentence-box">{sentence.sentence}</div>
          </div>
          <div className="box-align">
            <button className="primary-button" onClick={getData}>
              Give Me A Sentence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
