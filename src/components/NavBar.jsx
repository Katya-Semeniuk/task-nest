import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styles from '../styles/NavBar.module.css';


const NavBar = () => {
  return (
      <Navbar bg="light" expand="md">
        <Container>
        <NavLink to='/' className={styles.NavLink} activeClassName={styles.Active}>
        <Navbar.Brand >TaskNest</Navbar.Brand>
        </NavLink >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
          <NavLink to='/' className={styles.NavLink} activeClassName={styles.Active} exact>
          <i className="fas fa-home"></i>
          Home</NavLink>
            <NavLink to='/signin' className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            Sign In</NavLink>
            <NavLink to='/signup' className={styles.NavLink} activeClassName={styles.Active}>
            <i className="fas fa-user-plus"></i>
            Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavBar;
