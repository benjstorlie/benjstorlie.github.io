import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const email = 'benjstorlie@gmail.com'; 

export default function CopyEmailButton() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess(true);
    });
  };

  return (
    <>
      <a href={'mailto:'+email}>{email}</a>
      <Button
        onClick={handleCopyClick}
        aria-label="Copy email address"
        title="Copy email address"
        style={{ marginLeft: '.5em', padding: '.4em' }}
        variant='outline-primary'
      >
        <span
          role="img"
          aria-label="Copy emoji"
        >
          📋
        </span>
      </Button>
      {copySuccess && <p>Email address copied to clipboard!</p>}
    </>
  );
};
