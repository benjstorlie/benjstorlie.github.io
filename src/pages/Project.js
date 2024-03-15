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
    async function fetchOneRepo(ownerName) {
      if (!ownerName) {
        ownerName = 'benjstorlie';
      }
      try {
        const response = await request(`GET /repos/{owner}/{repo}`, {
          owner: ownerName,
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
        console.error(`Error fetching repo ${ownerName}/${repoName} from GitHub`)
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
            .replaceAll(/href="\.?\//g,`href="https://github.com/${ownerName}/${repoName}/blob/main/`)
            .replaceAll(/img src="\.?\//g,`img src="https://raw.githubusercontent.com/${ownerName}/${repoName}/main/`);

          setReadmeContent(content);
        } catch (error) {
          console.error(`Error fetching readme from ${ownerName}/${repoName}.`)
          throw error
        }
      }
    }

    async function fetchAll() {
      let repoData = {};
      
      /* TODO: Simplify this block. It is needlessly cumbersome.
      I'm trying to have it go through a series of cases for different owner usernames.
      If one 'owner' variable is falsy, OR if trying it results in an error, then check the next one.
      Right now I just have repeats inside of error blocks.
      One option: Have 'fetchOneRepo' return an error if the owner isn't provided, instead of a default?
      */ 

      try {
        if (owner) {
          try {
            repoData = await fetchOneRepo(owner);
          } catch (e) {
            if (projectDetails[repoName]?.owner){
              const ownerName = projectDetails[repoName].ownerName
              try {
                repoData = await fetchOneRepo(ownerName)
              } catch (e) {
                repoData = await fetchOneRepo('benjstorlie');
              }
            } else {
              repoData = await fetchOneRepo('benjstorlie');
            }
          }
        } else if (projectDetails[repoName]?.ownerName){
          const ownerName = projectDetails[repoName].ownerName
          try {
            repoData = await fetchOneRepo(ownerName)
          } catch (e) {
            repoData = await fetchOneRepo('benjstorlie');
          }
        } else {
          repoData = await fetchOneRepo('benjstorlie')
        }

        /** @type {string} - The owner username given from the response data */
        const repoOwner = repoData.owner.login;
        if (repoOwner === 'benjstorlie' && owner) {
          // TODO: change query parameters to remove owner
        } else if (repoOwner !== owner) {
          // TODO: change query parameters to correct owner username
        }
       
        // console.log(repoData);

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
    <>
      <Col xs={12}>
        <Badge bg="primary" onClick={handleLinkClick(repo.html_url)}>
          View on GitHub
        </Badge>
        {repo.homepage && <Badge bg="success" onClick={handleLinkClick(repo.homepage)}>
          View Website
        </Badge>}
      </Col>
      {projectDetails[repo.name]?.description && 
        <Col xs={12}>{projectDetails[repo.name].description}</Col>}
    </>
  )
}