import React from 'react';
import Navigation from './Navigation'

export default function Header( {page, repoName} ) {
  return (
    <header>
      <Navigation page={page} repoName={repoName}/>
    </header>
  );
}

