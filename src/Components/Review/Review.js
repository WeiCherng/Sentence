import "./Review.css";
import React from "react";
import ReviewBox from "../UI/reviewBox/reviewBox";

export default function Review() {
  return (
    <div className="review-container" id="review">
      <h2 className="review-title font1">
        If you're not sold on this yet, just listen to what our very satisifed
        users have to say about it!
      </h2>
      <div className="review-row">
        <div className="column review-column">
          <ReviewBox
            title={"“Hey This website is prertty amazing.”"}
            author={"-random stranger 1"}
          />
        </div>
        <div className="column review-column">
          <ReviewBox
            title={"“My life changed when I recieved my random sentence”"}
            author={"-random stranger 2"}
          />
        </div>
      </div>
    </div>
  );
}
