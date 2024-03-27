import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export default function LoadingErrorAlert( {page} ) {
  return (
    <Alert variant="warning">
      <Alert.Heading>Content failed to load</Alert.Heading>
      <p>
        { page && (
        <Alert.Link as="span">
          <Link to={(page!=='home' ?
            { pathname: '/', search: new URLSearchParams({page}).toString() } 
            : '/'
            )} >

            {`Return to ${(page ? (page[0].toUpperCase() + page.slice(1)) : 'Home')}.`}  
          
          </Link>
        </Alert.Link>
        )}
      </p>
    </Alert>
  );
}