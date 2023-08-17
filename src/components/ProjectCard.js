import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ repo }) {
  return (
    <div className="card">
      <Link to={repo.name}><h3>{repo.name}</h3></Link>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

