import React, { useState } from "react";
import "./slider.css";
import BtnSlider from "./BtnSlider";

export default function Slider({ data, num }) {
  const [slideIndex, setSlideIndex] = useState(1);
  console.log("what is the valueof ", num);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider" id={num === 2 ? "prod1" : "leave"}>
      {data.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            id={num === 2 ? "prod" : "leave"}
          >
            <img src={obj.title} alt="" />
          </div>
        );
      })}
      <BtnSlider num={2} moveSlide={nextSlide} direction={"next"} />
      <BtnSlider num={2} moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: num }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
