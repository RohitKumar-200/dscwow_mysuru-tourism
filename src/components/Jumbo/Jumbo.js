import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./Jumbo.css";
function Jumbo() {
  return (
    <Jumbotron fluid>
      <Container>
        <p class="jb-1">
          <img src="/images/jumbo-1.jpg" alt="" fluid />
        </p>
        <h1>Mysuru</h1>
        <p>Mysore, officially Mysuru, is a city in the southern part of the state of Karnataka, India. Mysore city is geographically located between 12° 18′ 26″ north latitude and 76° 38′ 59″ east longitude. It is located at an altitude of 740 m (2,427 ft).Mysore is located in the foothills of the Chamundi Hills about 145.2 km (90 mi) towards the southwest of Bangalore and spread across an area of 286.05 km2 (110 sq mi). Mysore City Corporation is responsible for the civic administration of the city, which is also the headquarters of the Mysore district and the Mysore division</p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
