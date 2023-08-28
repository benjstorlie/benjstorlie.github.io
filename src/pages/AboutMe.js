import React from 'react';
import Image from 'react-bootstrap/Image';
import profilePic from '../assets/profile-picture.jpeg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutMe() {
  return (
    <Row>
      <Col xs={12}>
      <h2>About Me</h2>
      </Col>
      <Col xs={7} sm={4} md={2}>
        <Image fluid src={profilePic} alt='Profile Picture with me and my dog Toby' thumbnail/>
      </Col>
      <Col xs={12} sm>
        <p>
          This is an about me section. Here are some personal details about me and my interests.
        </p>
      </Col>
    </Row>
  )
}