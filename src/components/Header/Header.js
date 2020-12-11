import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/images/favicon.ico"
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand href="#home"> Mysuru Tourism </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/destinations">Destinations</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/experiences">Experiences</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/gallery">Gallery</Link>
            </Nav.Link>
          </Nav>

          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/circle.png"
              width="25"
              height="25"
              roundedCircle
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
