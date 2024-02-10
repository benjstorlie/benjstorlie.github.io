import React from 'react';
import ContactInfo from './ContactInfo';
import { Container, Row, Col } from 'react-bootstrap';



export default function Footer() {
  return (
    <Container fluid as="footer">
      <Row>
        <Col>
          <ContactInfo />
        </Col>
        <Col>
          This website is made with React, using <a href="https://reactrouter.com/en/main">React-Router</a> and <a href="https://react-bootstrap.netlify.app/">React-Bootstrap</a>.  It uses the Github REST API to populate the portfolio contents with my Github repositories, and displaying the ReadMe as HTML.
        </Col>
      </Row>
    </Container>
  );
}