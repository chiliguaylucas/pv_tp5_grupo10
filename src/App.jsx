import { Container } from 'react-bootstrap'
import AboutUs from './assets/pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Games from './assets/pages/Games'
import Layout from './assets/pages/Layout'
import Error from './assets/pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/aboutus' element={<AboutUs />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
