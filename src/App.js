

import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Header />
        <Container fluid>
          <Routes>
            <Route path='/' element={ <Menu />} />
            <Route path='/about' element={ <AboutMe />} />
            <Route path='/:repo' element={ <Project />} />
          </Routes>
        </Container>
      <Footer />
    </>
  );
}

export default App;
