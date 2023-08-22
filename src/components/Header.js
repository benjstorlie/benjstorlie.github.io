import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo_hexagon_128x128.png';
import githubLogo from '../github-mark-white.svg';

export default function Header() {
  return (
    <header style={{backgroundImage: 'linear-gradient(to right,#777,#111)', color: '#fff'}}>
      <Link to='/' >
      <img src={logo} alt="logo"/></Link>
      <div>
        <a href='https://github.com/benjstorlie/' target='_blank' rel="noreferrer"><img src={githubLogo} alt='Link to My GitHub Page' style={{width: '32px', height: '32px'}} /></a>
      </div>
    </header>
  );
}

