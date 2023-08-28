import React from 'react';
import Email from './Email';
import githubLogo from '../assets/github-mark-white.svg';
import linkedinLogo from '../assets/linkedin-logo.png'
import stackoverflowLogo from '../assets/logo-stackoverflow.svg'

export default function Footer() {
  return (
    <footer style={{backgroundImage: 'linear-gradient(to right,#777,#111)', color: '#fff'}}>
      <ul>
        <li>
            <a href='https://github.com/benjstorlie/' target='_blank' rel="noreferrer">
            <img src={githubLogo} alt='Link to My GitHub Page' style={{width: '32px'}} />
            <span>GitHub Page</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bentley-storlie-16890488/" target='_blank' rel="noreferrer">
          <img src={linkedinLogo} alt='Link to My LinkedIn Profile' style={{width: '32px'}} />
            <span>LinkedIn Profile</span>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/22461342/benjstorlie" target='_blank' rel="noreferrer">
          <img src={stackoverflowLogo} alt='Link to My StackOverflow Profile' style={{width: '32px'}} />
            <span>StackOverflow Profile</span>
          </a>
        </li>
        <li>
          Email: <Email />
        </li>
      </ul>
    </footer>
  );
}