import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Travel.css"
function Travel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100"
          src="/images/travel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Travel Info</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Travel;
