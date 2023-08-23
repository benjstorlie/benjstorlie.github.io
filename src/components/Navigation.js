import React from 'react';
import logo from '../logo.svg'
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
      <NavLink to="/" role="button" className={"nav-link"}>Menu</NavLink>
      <NavLink to="/about" role="button" className={"nav-link"}>About Me</NavLink>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}