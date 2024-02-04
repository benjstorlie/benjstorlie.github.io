import React, { useState, useEffect } from 'react';
import { request } from "@octokit/request";
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';
import LoadingErrorAlert from '../components/LoadingErrorAlert';
import { projectDetails,
  // eslint-disable-next-line
  RepoDetails
 } from '../utils/projectDetails';
 import { handleLinkClick } from '../utils/utils';

export default function Project( {repoName} ) {

  /** @type {[RepoDetails, React.Dispatch<React.SetStateAction<RepoDetails>>]} */
  const [repo, setRepo] = useState({})
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect( () => {
    async function fetchOneRepo( repoName ) {
      try {
        const response = await request(`GET /repos/{owner}/{repo}`, {
          owner: 'benjstorlie',
          repo: repoName,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        setRepo( {
          ...response.data,
          ...projectDetails?.[repoName]
        })

      } catch (error) {

      }
    }
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

  return (
    <Row>
      (
        (loadingError || isLoading)
        ? <LoadingComponent error={loadingError} />
        : (<>
          <Col>
            <h3>
            <Badge bg="primary" onClick={handleLinkClick(repo.html_url)}>
              View on GitHub
            </Badge>
            {repo.homepage && <Badge bg="success" onClick={handleLinkClick(repo.homepage)}>
              View Website
            </Badge>}
            </h3>
          </Col>
          <Col>
            {parse(readmeContent)}
          </Col>
        </>)
      )
    </Row>)
}


function LoadingComponent({ error }) {
  return (
    <Col>
      {error 
        ? <LoadingErrorAlert page={'menu'}/> 
        : <p>loading...</p>
      }
    </Col>
  )
}