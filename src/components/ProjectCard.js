import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Placeholder from 'react-bootstrap/Placeholder';
import RepoCoverImage from './RepoCoverImage';

export default function ProjectCard({ repo , placeholder }) {
  return (
    <Col xs={12} md={6} xl={4} className="my-2 d-flex">
      {placeholder
      ? <Card style={{maxWidth:'500px',flex:1}}>
          <Card.Header>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          </Card.Header>
          <Card.Body><Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder></Card.Body>
        </Card>
      : <Link to={`${repo.name}`} style={{display:'flex',flex:'1'}}>
          <Card style={{maxWidth:'500px',flex:1}}>
            <Card.Header>
              <Card.Title>{transformTitle(repo.name)}</Card.Title>
              <Badge as={'a'} bg="primary" href={repo.html_url} target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}>
                View on GitHub
              </Badge>
              {repo.homepage && <Badge as={'a'} bg="success" href={repo.homepage} target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}>
                View Website
              </Badge>}
            </Card.Header>
            <Card.Body>
              <Card.Text>{repo.description}</Card.Text>
            </Card.Body>
            <RepoCoverImage repo={repo}/>
          </Card>
        </Link>
      }
    </Col>
  );
}


const transformTitle = (input) => input
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

