import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./Generate.css";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Generate() {
  const [sentence, setSentence] = useState("");
  let lastSentence = "";

  const getData = async () => {
    let newSentence = lastSentence;
    let attempts = 0;
    const maxRetries = 3;

    while (newSentence === lastSentence && attempts < maxRetries) {
      const { data, error } = await supabase
        .from("sentences")
        .select("content")
        .order("random_val", { ascending: true })
        .gte("random_val", Math.random())
        .limit(1);

      if (error) {
        setSentence("Error Generating Sentence");
        return;
      }

      newSentence = data[0].content;
      attempts++;
    }
    lastSentence = newSentence;
    setSentence(newSentence);
  };

  return (
    <div id="generate-container">
      <div className="generate-innerCont">
        <h3 className="generate-title">Generate Random Sentence</h3>
        <p className="generate-desc">
          Try the sentence generator to create unique, unrelated and out of
          context sentece for your daily life. Click on the generate button to
          get your totally random sentence by a totally random stranger from the
          internet!
        </p>
        <div className="box">
          <div className="inner-box box-align">
            <div className="sentence-box">{sentence}</div>
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
