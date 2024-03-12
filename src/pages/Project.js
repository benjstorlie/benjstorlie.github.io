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

export default function Project( {repoName, owner} ) {

  /** @type {[RepoDetails, React.Dispatch<React.SetStateAction<RepoDetails>>]} */
  const [repo, setRepo] = useState({})
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect( () => {
    async function fetchOneRepo(owner) {
      if (!owner) {
        owner = 'benjstorlie';
      }
      try {
        const response = await request(`GET /repos/{owner}/{repo}`, {
          owner,
          repo: repoName,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        const repoData = {
          ...response.data,
          ...projectDetails?.[repoName]
        }
        setRepo(repoData);
        return repoData;

      } catch (error) {
        throw error
      }
    }
    async function fetchReadme(ownerName='benjstorlie') {
      const customReadme = projectDetails[repoName]?.readme;
      if (customReadme) {
        setReadmeContent(customReadme);
      } else {
        try {
          const response = await request(`GET /repos/{owner}/{repo}/readme`, {
            owner: ownerName,
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
            .replaceAll(/href="\.?\//g,`href="https://github.com/${owner}/${repoName}/blob/main/`)
            .replaceAll(/img src="\.?\//g,`img src="https://raw.githubusercontent.com/${owner}/${repoName}/main/`);

          setReadmeContent(content);
        } catch (error) {
          throw error
        }
      }
    }

    async function fetchAll() {
      let repoData = {};
      
      try {
        if (owner) {
          try {
            repoData = await fetchOneRepo(owner);
          } catch (e) {
            console.error(`Error fetching repo ${owner}/${repoName} from GitHub`)
            try {
              if (projectDetails?.[repoName]?.owner){
                repoData = await fetchOneRepo(projectDetails?.[repoName]?.ownerName)
              }
            } catch (e) {
              console.error(`Error fetching repo ${projectDetails?.[repoName]?.ownerName}/${repoName} from GitHub`)
              repoData = await fetchOneRepo('benjstorlie')
            }
          }
        } else if (projectDetails?.[repoName]?.ownerName){
          try {
            if (projectDetails?.[repoName]?.owner){
              repoData = await fetchOneRepo(projectDetails?.[repoName]?.ownerName)
            }
          } catch (e) {
            console.error(`Error fetching repo ${projectDetails?.[repoName]?.ownerName}/${repoName} from GitHub`)
            repoData = await fetchOneRepo('benjstorlie');
          }
        } else {
          repoData = await fetchOneRepo('benjstorlie')
        }

        const repoOwner = repoData.owner.login;
        if (repoOwner === 'benjstorlie' && owner) {
          // TODO: change query parameters to remove owner
        } else if (repoOwner !== owner) {
          // TODO: change query parameters to correct owner username
        }
       

        await fetchReadme(repoOwner);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching repo data: ', error.message);
        setLoadingError(true);
        setIsLoading(false);
      }
    }
    fetchAll();
  }, [repoName]) 

  return (
    <Row>
      {(
        (loadingError || isLoading)
        ? <LoadingComponent error={loadingError} />
        : (<>
          <ProjectHeader repo={repo} />
          <Col xs={12}>
            {parse(readmeContent)}
          </Col>
        </>)
      )}
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



function ProjectHeader( {repo} ) {
  return (
    <Col xs={12}>
    <h3>
    <Badge bg="primary" onClick={handleLinkClick(repo.html_url)}>
      View on GitHub
    </Badge>
    {repo.homepage && <Badge bg="success" onClick={handleLinkClick(repo.homepage)}>
      View Website
    </Badge>}
    </h3>
  </Col>
  )
}