import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo128.png';
import Navigation from './Navigation'

export default function Header() {
  return (
    <header style={{backgroundImage: 'linear-gradient(to right,#777,#111)', color: '#fff'}}>
      <Link to='/' >
      <img src={logo} alt="logo"/></Link>
      <Navigation />
    </header>
  );
}

