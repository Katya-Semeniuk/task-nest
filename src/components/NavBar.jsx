import {Navbar, Container, Nav} from 'react-bootstrap';


const NavBar = () => {
  return (
      <Navbar bg="light" expand="md">
        <Container>
        <Navbar.Brand >TaskNest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
          <Nav.Link >
          <i className="fas fa-home"></i>
          Home</Nav.Link>
            <Nav.Link >
            <i className="fas fa-sign-in-alt"></i>
            Sign In</Nav.Link>
            <Nav.Link >
            <i className="fas fa-user-plus"></i>
            Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavBar;
