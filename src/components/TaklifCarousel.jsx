import React from "react";
import TitleComponent from "./TitleComponent";
import CartsCarousel from "./CartsCarousel";

function TaklifCarousel({ title, span, param, data }) {
  return (
    <div className="container">
      <TitleComponent title={title} span={span} param={param} />
      <CartsCarousel data={data} />
    </div>
  );
}

export default TaklifCarousel;
