import React from "react";
import "./slider.css";

export default function BtnSlider({ direction, moveSlide, num }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      id="num==2? next1 : prev1"
    >
      <img
        src={
          direction === "next"
            ? "https://img.icons8.com/?size=50&id=39969&format=png"
            : "https://img.icons8.com/?size=50&id=39944&format=png"
        }
        alt=""
      />
    </button>
  );
}
