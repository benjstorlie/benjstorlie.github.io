import React from 'react';
import logo from '../assets/logo.svg'
import { Link,NavLink } from 'react-router-dom'
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar expand="sm" >
      <Container>
        <Link to="/" className="navbar-brand">
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            /></Link>
      <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
        <Nav>
          <NavLink to="/portfolio-page" role="button" className={"nav-link"}>Portfolio</NavLink>
          <NavLink to="/" role="button" className={"nav-link"}>About Me</NavLink>
          <NavLink to="/resume" role="button" className={"nav-link"}>Resume</NavLink>
          <NavLink to="/contact" role="button" className={"nav-link"}>Contact</NavLink>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}