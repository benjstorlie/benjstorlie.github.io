import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import Row from 'react-bootstrap/Row';
import ProjectCard from '../components/ProjectCard'
import { projectDetails } from '../utils/projectDetails';
import LoadingErrorAlert from '../components/LoadingErrorAlert';

export default function Menu( {setSearchParams} ) {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect( () => {
     async function fetchRepos() {
      try {
        const response = await request(`GET /users/{username}/repos`, {
          username: 'benjstorlie',
          type: 'all',
          sort: 'updated',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        
        setProjects(response.data.filter((repo) => !projectDetails[repo.name]?.exclude));
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching repos:', error.message);
        setLoadingError(true);
        setIsLoading(false);
      }
    }

    fetchRepos();

}, []) 

  return (
    <Row>
      { loadingError ? <LoadingErrorAlert />
      : (isLoading 
      ? (<ProjectCard placeholder/>)
      : projects.map((repo) => {
        repo = {
          ...repo,
          ...projectDetails[repo.name]
        }
          return (<ProjectCard key={repo.id} repo={repo} />)
        }))
      }
    </Row>
  )
}