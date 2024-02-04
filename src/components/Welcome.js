import React from 'react';
import Image from 'react-bootstrap/Image';
import profilePic from '../assets/profile-picture.jpeg'
import Col from 'react-bootstrap/Col';


export default function Welcome() {
  return (
    <>
      <Col xs={12}>
      <h2>About Me</h2>
      </Col>
      <Col xs={7} sm={4} md={2}>
        <Image fluid src={profilePic} alt='Profile Picture with me and my dog Toby' thumbnail/>
      </Col>
      <Col xs={12} sm>
        <p>
        Interested in math, coding, disability advocacy, and speech &amp; language. I have experience in public education as a paraprofessional for young adults. I have a B.A. in Math with some grad school for Math and Math Education. I'd like to be part of Augmentative &amp; Alternative Communication technology, or accessibility/educational technology in general.
        </p>
      </Col>
    </>
  )
}