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
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
{/* https://fonts.google.com/icons?selected=Material+Symbols+Rounded:content_copy:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=copy&icon.style=Rounded --> */}
<path fill="white" d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-520q0-17 11.5-28.5T160-720q17 0 28.5 11.5T200-680v520h400q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H200Zm160-240v-480 480Z"/></svg>
        </span>
      </Button>
      {copySuccess && <p>Email address copied to clipboard!</p>}
    </>
  );
};
