import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import ProjectCard from '../components/ProjectCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Menu() {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
     async function fetchRepos() {
      try {
        const response = await request(`GET /users/benjstorlie/repos?type=all&sort=updated`, {
          owner: 'benjstorlie',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })

        setProjects(response.data);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching repos:', error.message);
      }
    }

    fetchRepos();

}, []) 

  return (
    <Row>
      {( isLoading ? 'loading...'
      : projects.map((repo) => (
        <Col key={repo.id+'col'} xs={12} md={6} className="my-2">
          <ProjectCard key={repo.id} repo={repo} />
        </Col>
      )))}
    </Row>
  )
}