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
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          },
          mediaType: {
            format: 'html'
          }
        })

        let content = response.data
          .replaceAll(`id="user-content-`,`id="`)
          .replaceAll(/href="\/(?=[^"]+\.(jpg|jpeg|png|gif|bmp|svg)"><img)/g,`href="https://github.com/benjstorlie/${repo}/blob/main/`)
          .replaceAll(`img src="/`,`img src="https://raw.githubusercontent.com/benjstorlie/${repo}/main/`);

        setReadmeContent(content);
      } catch (error) {
        console.error('Error fetching readme:', error.message);
      }
    }
    fetchReadme();
  }, [repo]) 

  return (<div>{parse(readmeContent)}</div>)
}