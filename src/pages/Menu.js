import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import Row from 'react-bootstrap/Row';
import ProjectCard from '../components/ProjectCard'
import { projectDetails } from '../utils/projectDetails';

export default function Menu( {setSearchParams} ) {

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
        
        setProjects(response.data.filter((repo) => !projectDetails(repo.name).exclude));
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching repos:', error.message);
      }
    }

    fetchRepos();

}, []) 

  return (
    <Row>
      { isLoading 
      ? (<ProjectCard placeholder/>)
      : projects.map((repo) => {
        repo = {
          ...repo,
          ...projectDetails[repo.name]
        }
          return (<ProjectCard key={repo.id} repo={repo} />)
        })
      }
    </Row>
  )
}