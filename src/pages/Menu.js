import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import ProjectCard from '../components/ProjectCard'

export default function Menu() {

  const [projects, setProjects] = useState([]);

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
        
      } catch (error) {
        console.error('Error fetching repos:', error.message);
      }
    }

    fetchRepos();

}, []) 

  return (
    <>
      {projects.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </>
  )
}