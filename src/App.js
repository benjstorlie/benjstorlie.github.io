

import { useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Menu from './pages/Menu'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import ResumePage from './pages/ResumePage'

function App() {

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');
  const repoName = searchParams.get('repo');

  let mainComponent;

  switch (page) {
    case 'about':
      mainComponent = <AboutMe />;
      break;
    case 'contact': 
      mainComponent = <Contact />;
      break;
    case 'resume':
      mainComponent = <ResumePage />;
      break;
    case 'portfolio':
      mainComponent = repoName ? <Project repoName={repoName} /> : <Menu />;
      break;
    default:
      // Handle other cases or set a default component
      mainComponent = <Menu />;
  }

  return (
    <Stack style={{minHeight:'100vh'}}>
      <Header page={page} repo={repoName} />
      <Container fluid as={'main'} style={{flex:'1'}}>
        {mainComponent}
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;
