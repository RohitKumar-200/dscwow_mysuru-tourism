import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./Footer.css";
function Footer() {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>Destinations</p>
          <ListGroup variant="flush">
            <ListGroup.Item>Mysore Palace</ListGroup.Item>
            <ListGroup.Item>Bridavan Gardens</ListGroup.Item>
            <ListGroup.Item>
              Sri Chamarajendra Zoological Gardens
            </ListGroup.Item>
            <ListGroup.Item>Sri Chamundeshwari Temple</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md="auto">
          <p>Experiences</p>
          <ListGroup variant="flush">
            <ListGroup.Item>Culture</ListGroup.Item>
            <ListGroup.Item>Outdoor</ListGroup.Item>
            <ListGroup.Item>Food</ListGroup.Item>
            <ListGroup.Item>Nature</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md="auto">
          <p>Support</p>
          <ListGroup variant="flush">
            <ListGroup.Item variant="info">namaste@mysuru.org</ListGroup.Item>
            <ListGroup.Item variant="info">512-209010</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
