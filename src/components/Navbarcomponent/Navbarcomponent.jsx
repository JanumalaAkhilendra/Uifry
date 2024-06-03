/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import "./Navbarcomponent.css"
import fire_logo from "../../assets/fire.png"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar2() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#"><img src={fire_logo} alt=""  id='logo_fire' />UiFry</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id='home'>Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <Nav.Link href="#action2">Feature</Nav.Link>           
          </Nav>
          <Form className="d-flex">
          <button type="button" className="btn btn-dark">Download</button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;