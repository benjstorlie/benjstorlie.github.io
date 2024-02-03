import Alert from 'react-bootstrap/Alert';

export default function LoadingErrorAlert( {page} ) {
  return (
    <Alert variant="warning">
      <Alert.Heading>Content failed to load</Alert.Heading>
      <p>
        Return to 
        <Alert.Link>
        <Link to={(page ? 
          { pathname: '/', search: new URLSearchParams({page}).toString() } 
          : '/'
          )} >

          {page ? (page[0].toUpperCase() + page.slice(1)) : 'Home'}  
        
        </Link>
        </Alert.Link>
        .
      </p>
    </Alert>
  );
}