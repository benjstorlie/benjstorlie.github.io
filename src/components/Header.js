import React from 'react';
import { ReactComponent as GitHubLogo } from '../github-mark-white.svg';

export default function Header() {
  return (
    <div style={{background: '#000', color: '#fff'}}>
      Header Content 
      <div>
        <a href='https://github.com/benjstorlie/' target='_blank' rel="noreferrer"><GitHubLogo title='Link to My GitHub Page'/></a>
      </div>
    </div>
  );
}

