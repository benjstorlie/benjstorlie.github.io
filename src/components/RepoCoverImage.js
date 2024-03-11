import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { projectDetails } from '../utils/projectDetails';

export default function RepoCoverImage({ repo }) {
  const imgUrl = projectDetails[repo.name]?.coverImage 
  ? `/repo-covers/${repo.name}.png`
  : `https://raw.githubusercontent.com/${repo.full_name}/main/cover.png`
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    // Create an Image object
    const img = new Image();

    // Set up an event handler to check if the image exists
    img.onload = function () {
      // Image exists
      setImageExists(true);
    };

    img.onerror = function (error) {
      // If the file cover.png does not exist in the repo root folder
      // Don't log the error message, since it's expected that many of the image urls won't exist
      // TODO It's still showing all the error messages though.
      error.preventDefault();
      setImageExists(false);
    };

    // Set the image source to trigger the load and error events
    img.src = imgUrl;
  }, [imgUrl]);



  return (
    <>
      {imageExists ? (
        <Card.Img variant='bottom' src={imgUrl} alt={`Image for ${repo.name}`}/>
      ) : (
        <Card.Footer />
      )}
    </>
  );
}
