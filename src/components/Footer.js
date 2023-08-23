import React from 'react';

import githubLogo from '../github-mark-white.svg';

export default function Footer() {
  return (
    <footer style={{background: '#000', color: '#fff'}}>
      <a href='https://github.com/benjstorlie/' target='_blank' rel="noreferrer"><img src={githubLogo} alt='Link to My GitHub Page' style={{width: '32px', height: '32px'}} /></a>
    </footer>
  );
}