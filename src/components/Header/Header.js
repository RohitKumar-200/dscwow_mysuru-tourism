import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("mysuru-tourism-user"))
  );

  const handleLogout = () => {
    localStorage.removeItem("mysuru-tourism-user");
    setUser(null);
  };

  return (
    <div className="header">
      <Navbar expand="lg" variant="light" bg="light" sticky="top">
        <Navbar.Brand>
          <img
            alt=""
            src="/mysuruLogo.png"
            width="75"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand>
          {" "}
          <Link to="/home">Mysuru Tourism</Link>{" "}
        </Navbar.Brand>
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
            <Nav.Link>
              <Link to="/map">Map</Link>
            </Nav.Link>
          </Nav>
          <div className="header__userName">
            {user ? user.name : "Hello Guest"}
          </div>
          <Navbar.Brand>
            <Avatar src={user?.pic} />
          </Navbar.Brand>
          {user ? (
            <button className="header__authButton" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="header__authButton">SignIn</button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
