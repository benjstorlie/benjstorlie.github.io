import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo128.png';
import Navigation from './Navigation'

export default function Header( {page, repoName} ) {
  return (
    <header>
      <Link to='/' >
      <img src={logo} alt="logo"/></Link>
      <Navigation page={page} repoName={repoName}/>
    </header>
  );
}

