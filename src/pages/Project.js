import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { request } from "@octokit/request";
import ReactMarkdown from 'react-markdown';

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
          }
        })
        const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
        setReadmeContent(content);
      } catch (error) {
        console.error('Error fetching readme:', error.message);
      }
    }
    fetchReadme();
  }, [repo]) 

  return (<ReactMarkdown>{readmeContent}</ReactMarkdown>)
}