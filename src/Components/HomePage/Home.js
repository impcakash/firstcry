import React from "react";
import Slider from "../Slider/Slider";
import dataSlider from "../Slider/dataSlider";
import { useState } from "react";
import Navbaar2 from "../Navbaar/Navbaar2";
import Navbaar from "../Navbaar/Navbaar";

export default function Home() {
  const [data, setData] = useState(dataSlider);
  return (
    <>
      <Navbaar />
      <Navbaar2 />
      <Slider data={data} num={7} />
    </>
  );
}
