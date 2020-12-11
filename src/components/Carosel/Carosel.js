import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carosel.css";
function Carosel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/images/Mysore-cr-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mysore Palace</h3>
          <p>The Great Historical Palace of Mysore</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/Mysore-cr-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Mysore Holy Temple</h3>
          <p>The Great Historical Temple in Mysore</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/Mysore-cr-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>The Mysore Waterfall</h3>
          <p>A nature's Beauty</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;
