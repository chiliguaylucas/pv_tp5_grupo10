import { Outlet } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logoISH from '../img/LogoISH.png';
function Layout (){
    return (
        <>
         <header>
            
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src={logoISH}width="30%"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         </header>
         <main>
            <Outlet></Outlet>
         </main>
        </>

        
    )
}

export default Layout;
