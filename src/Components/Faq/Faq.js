import "./Faq.css";
import React from "react";
import Wrapper from "../Helpers/Wrapper";

export default function Faq() {
  return (
    <Wrapper>
      <h2 className="faq-title font1">Frequently Asked Questions</h2>
      <div className="faq-container">
        <div className="faq-column">
          <div className="faq-box">
            <h5 className="faq-q font2">Are these really random sentece?</h5>
            <p className="faq-a font2">
              Yes. This is a random sentence generator
            </p>
          </div>
          <div className="faq-box">
            <h5 className="faq-q font2">Can I get the same sentence again?</h5>
            <p className="faq-a font2">Good question. Maybe?</p>
          </div>
          <div className="faq-box">
            <h5 className="faq-q font2">
              How often should I generate a random sentence?
            </h5>
            <p className="faq-a font2">
              You should definately have yourself a sentence a day. It keeps
              random strangers away (Not Guarantee)
            </p>
          </div>
        </div>
        <div className="faq-column">
          <div className="faq-box">
            <h5 className="faq-q font2">
              Is the sentece from a random stranger?
            </h5>
            <p className="faq-a font2">Yep. It sure is.</p>
          </div>
          <div className="faq-box">
            <h5 className="faq-q font2">
              What if I dont want a random sentence?
            </h5>
            <p className="faq-a font2">Too Bad for you then.</p>
          </div>
          <div className="faq-box">
            <h5 className="faq-q font2">
              How do I generate a random sentence?
            </h5>
            <p className="faq-a font2">
              Dude. Just Click the “Generate” button.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
