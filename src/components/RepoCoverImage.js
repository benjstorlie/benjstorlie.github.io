import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { projectImages } from '../utils/projectDetails';

export default function RepoCoverImage({ repo }) {
  const imgUrl = projectImages[repo.name] 
  ? `/repo-covers/${repo.name}.png`
  : `https://raw.githubusercontent.com/benjstorlie/${repo.name}/main/cover.png`
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    // Create an Image object
    const img = new Image();

    // Set up an event handler to check if the image exists
    img.onload = function () {
      // Image exists
      setImageExists(true);
    };

    img.onerror = function () {
      // Image does not exist
      setImageExists(false);
    };

    // Set the image source to trigger the load and error events
    img.src = imgUrl;
  }, [imgUrl]);

  return (
    <>
      {imageExists ? (
        <Card.Img variant='bottom' src={imgUrl} alt="Repository Cover"/>
      ) : (
        <Card.Footer />
      )}
    </>
  );
}
