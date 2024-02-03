import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// For now, this is copied straight from the footer.

export default function Contact() {

  return (
    <Row>
      <Col xs={12} sm={10} md={8} className="mx-auto">
        <h2>Contact Me</h2>
        <ul>
          <li>
            <a href='https://github.com/benjstorlie/' target='_blank' rel="noreferrer">
            <img src={githubLogo} alt='Link to My GitHub Page' className="external-logo" />
            <span>GitHub Page</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/benjstorlie/" target='_blank' rel="noreferrer">
            <img src={linkedinLogo} alt='Link to My LinkedIn Profile' className="external-logo" />
              <span>LinkedIn Profile</span>
            </a>
          </li>
          {/* <li>
            <a href="https://stackoverflow.com/users/22461342/benjstorlie" target='_blank' rel="noreferrer">
            <img src={stackoverflowLogo} alt='Link to My StackOverflow Profile' className="external-logo" />
              <span>StackOverflow Profile</span>
            </a>
          </li> */}
          <li>
            Email: <Email />
          </li>
        </ul>
      </Col>
    </Row>
  )
}