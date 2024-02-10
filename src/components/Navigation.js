import React from 'react';
import logo from '../assets/logo.svg'
import { Link, 
  // Link 
} from 'react-router-dom'
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation( {page, repoName} ) {
  return (
    <Navbar expand="sm" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          Ben Storlie
          <img
              src={logo}
              className="brand-img d-inline-block align-top"
              alt="logo"
            /></Link>
      <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
        <Nav>
          <Link to={{ pathname: '/', search: new URLSearchParams({page: 'portfolio'}).toString() }} role="button" className={"nav-link"+((page==='portfolio' && !repoName) ? " active" : "")}>
            Portfolio
          </Link>
          <Link to={{ pathname: '/', search: new URLSearchParams({page: 'about'}).toString() }} role="button" className={"nav-link"+(page==='about' ? " active" : "")}>
            About Me
          </Link>
          <Link to={{ pathname: '/', search: new URLSearchParams({page: 'resume'}).toString() }} role="button" className={"nav-link"+(page==='resume' ? " active" : "")}>
            Resume
          </Link>
          <Link to={{ pathname: '/', search: new URLSearchParams({page: 'contact'}).toString() }} role="button" className={"nav-link"+(page==='contact' ? " active" : "")}>
            Contact
          </Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}