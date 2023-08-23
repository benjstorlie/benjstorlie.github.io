import React from 'react';
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder';

export default function ProjectCard({ repo }) {
  return (
    <Card>
      <Card.Header>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      </Card.Header>
      <Card.Body>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}

