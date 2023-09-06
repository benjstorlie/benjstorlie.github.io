

import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Menu from './pages/Menu'
import Portfolio from './pages/Portfolio';
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <Stack style={{minHeight:'100vh'}}>
      <Header />
      <Container fluid as={'main'} style={{flex:'1'}}>
        <Routes>
          <Route path='/portfolio-page' element={ <Portfolio />} >
            <Route index element={<Menu />} />
            <Route path=':repo' element={ <Project />} />
          </Route>
          <Route path='/' element={ <AboutMe />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/resume' element={ <ResumePage />} />
        </Routes>
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;
