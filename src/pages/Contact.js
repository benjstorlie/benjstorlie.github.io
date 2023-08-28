import React from 'react';
import ContactForm from '../components/ContactForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {

  return (
    <Row>
      <Col xs={12} sm={10} md={8} className="mx-auto">
        <h2>Contact Me</h2>
        <ContactForm />
      </Col>
    </Row>
  )
}