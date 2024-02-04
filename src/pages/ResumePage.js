import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ResumePage() {
  return (
    <div><h2>Resume</h2> <a href='./resume/storlie-resume.pdf' target="_blank" rel="noreferrer">
      <Button variant="outline-info"><span>📃</span> Click here to open Resume PDF </Button></a></div>
  )
}