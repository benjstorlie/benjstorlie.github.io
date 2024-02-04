import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import parse from 'html-react-parser';
import LoadingErrorAlert from '../components/LoadingErrorAlert';
import { projectDetails } from '../utils/projectDetails';

export default function Project( {repoName} ) {

  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect( () => {
    async function fetchReadme() {
      const customReadme = projectDetails[repoName]?.readme;
      if (customReadme) {
        setReadmeContent(customReadme);
        setIsLoading(false);
      } else {
        try {
          const response = await request(`GET /repos/benjstorlie/${repoName}/readme`, {
            owner: 'benjstorlie',
            repo: repoName,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            },
            mediaType: {
              format: 'html'
            }
          })

          // This re-writes the self-referencing links to explicit links to files in the repo.
          let content = response.data
            .replaceAll(`id="user-content-`,`id="`)
            .replaceAll(/href="\.?\//g,`href="https://github.com/benjstorlie/${repoName}/blob/main/`)
            .replaceAll(/img src="\.?\//g,`img src="https://raw.githubusercontent.com/benjstorlie/${repoName}/main/`);

          setReadmeContent(content);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching readme:', error.message);
          setLoadingError(true);
          setIsLoading(false);
        }
      }
    }
    fetchReadme();
  }, [repoName]) 

  return (<div>{
    ( loadingError ? <LoadingErrorAlert page={'menu'}/> :
      ( isLoading ? 'loading...' : parse(readmeContent) )
    )}</div>)
}