import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Placeholder from 'react-bootstrap/Placeholder';
import RepoCoverImage from './RepoCoverImage';
import { transformTitle, handleLinkClick } from '../utils/utils';

export default function ProjectCard({ repo , placeholder }) {

  return (
    <Col xs={12} md={6} xl={4} className="my-2 d-flex">
      {placeholder
      ? <PlaceHolderCard />
      : <Link to={{ 
          pathname: '/', 
          search: new URLSearchParams((repo.owner.login === 'benjstorlie' 
          ? {page: 'portfolio', repo: repo.name} 
          : {page: 'portfolio', repo: repo.name, owner: repo.owner.login || repo.ownerName}
          )).toString() 
        }} 
        style={{display:'flex',flex:'1'}
        }>
          <Card style={{maxWidth:'500px',flex:1}}>
            <Card.Header>
              <Card.Title>{transformTitle(repo.name)}</Card.Title>
              <Badge bg="primary" onClick={handleLinkClick(repo.html_url)}>
                View on GitHub
              </Badge>
              {repo.homepage && <Badge bg="success" onClick={handleLinkClick(repo.homepage)}>
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

function PlaceHolderCard() {
  return (
    <Card style={{maxWidth:'500px',flex:1}}>
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
  )
}

