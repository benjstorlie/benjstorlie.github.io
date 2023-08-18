import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { request } from "@octokit/request";
import parse from 'html-react-parser';

export default function Project() {
  const { repo } = useParams();

  const [readmeContent, setReadmeContent] = useState('');

  useEffect( () => {
    async function fetchReadme() {
      try {
        const response = await request(`GET /repos/benjstorlie/${repo}/readme`, {
          owner: 'benjstorlie',
          repo,
          mode: 'gfm',
          context: `benjstorlie/${repo}`,
          headers: {
            accept: 'application/vnd.github.html+json',
            'X-GitHub-Api-Version': '2022-11-28'
          },
          mediaType: {
            format: 'html'
          }
        })
        setReadmeContent(response.data);
      } catch (error) {
        console.error('Error fetching readme:', error.message);
      }
    }
    fetchReadme();
  }, [repo]) 

  return (<div>{parse(readmeContent)}</div>)
}