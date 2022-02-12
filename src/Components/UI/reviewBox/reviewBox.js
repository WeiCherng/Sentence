import "./reviewBox.css";
import React from "react";

export default function ReviewBox(props) {
  return (
    <div className="review-model">
      <div className="review-box">
          <h2 className="review-content font2">{props.title}</h2>
          <p className="review-author font2">{props.author}</p>
      </div>
      <div className="review-arrow"></div>
      <div className="review-avatar-cont">
        <img className="review-avatar" src={props.img} alt="reviewer"/>
      </div>
    </div>
  );
}
