import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import Row from 'react-bootstrap/Row';
import ProjectCard from '../components/ProjectCard'
import Welcome from '../components/Welcome';
import { projectDetails, showcase } from '../utils/projectDetails';
import LoadingErrorAlert from '../components/LoadingErrorAlert';

export default function Home( {setSearchParams} ) {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect( () => {
    /**
     * 
     * @param {string[]} repoList 
     */
     async function fetchRepos(repoList) {
      try {
        const projectsData = [];
        for (const repoName of repoList) {
          const response = await request(`GET /repos/{owner}/{repo}`, {
            owner: 'benjstorlie',
            repo: repoName,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
          projectsData.push(response.data);
        }
        setProjects(projectsData);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching repos:', error.message);
        setLoadingError(true);
        setIsLoading(false);
      }
    }

    fetchRepos(showcase);

}, []) 

  return (
    <Row>
      <Col>
        <Welcome />
      </Col>
      <Col>
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
      </Col>
    </Row>
  )
}