import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

export default function ProjectCard({ repo }) {
  return (
    <Card>
      <Card.Header>
          <Link to={repo.name}>
          <Card.Title>{repo.name}</Card.Title>
        </Link>
      </Card.Header>
      <Card.Body>
        <Card.Text>{repo.description}</Card.Text>
        <Card.Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

