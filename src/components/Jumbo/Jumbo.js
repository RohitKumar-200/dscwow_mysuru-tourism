import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./Jumbo.css";
function Jumbo(){
    return(
        <Jumbotron fluid>
        <Container>
        <p><img src="#" alt = "jumbotron" /></p>
        <h1>Mysuru</h1>
        <p>A place to heaven</p>
        </Container>
        </Jumbotron>
    );
}

export default Jumbo;