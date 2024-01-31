import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import parse from 'html-react-parser';
import { projectDetails } from '../utils/projectDetails';

export default function Project( {repo} ) {

  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    async function fetchReadme() {
      const customReadme = projectDetails[repo]?.readme;
      if (customReadme) {
        setReadmeContent(customReadme);
        setIsLoading(false);
      } else {
        try {
          const response = await request(`GET /repos/benjstorlie/${repo}/readme`, {
            owner: 'benjstorlie',
            repo,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            },
            mediaType: {
              format: 'html'
            }
          })

          let content = response.data
            .replaceAll(`id="user-content-`,`id="`)
            .replaceAll(/href="\.?\//g,`href="https://github.com/benjstorlie/${repo}/blob/main/`)
            .replaceAll(/img src="\.?\//g,`img src="https://raw.githubusercontent.com/benjstorlie/${repo}/main/`);
          setReadmeContent(content);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching readme:', error.message);
        }
      }
    }
    fetchReadme();
  }, [repo]) 

  return (<div>{( isLoading ? 'loading...' : parse(readmeContent) )}</div>)
}