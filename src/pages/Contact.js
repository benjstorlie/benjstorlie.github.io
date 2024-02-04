import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInfo from '../components/ContactInfo';


export default function Contact() {

  return (
    <Row>
      <Col xs={12} sm={10} md={8} className="mx-auto">
        <h2>Contact Me</h2>
          <ContactInfo />
      </Col>
    </Row>
  )
}