

import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Container from 'react-bootstrap/Container';
import Contact from './pages/Contact'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <>
      <Header />
        <Container fluid id="main">
          <Routes>
            <Route path='/portfolio' element={ <Menu />} />
            <Route path='/' element={ <AboutMe />} />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/resume' element={ <ResumePage />} />
            <Route path='/:repo' element={ <Project />} />
          </Routes>
        </Container>
      <Footer />
    </>
  );
}

export default App;
