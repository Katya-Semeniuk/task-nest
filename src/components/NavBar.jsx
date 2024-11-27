import { useContext} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo-1.png';
import styles from '../styles/NavBar.module.css';
import appStyles from '../App.module.css';
import { CurrentUserContext } from "../App";


const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (<>
  <NavLink to='/signin' className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            Sign In</NavLink>
            <NavLink to='/signup' className={styles.NavLink} activeClassName={styles.Active}>
            <i className="fas fa-user-plus"></i>
            Sign Up</NavLink></>)

  return (
      <Navbar bg="light" expand="md">
        <Container>
        <NavLink to='/' className={styles.NavLink} activeClassName={styles.Active}>
        <Navbar.Brand >
        <div className={styles.LogoWrapper}>
        <img src={logo} alt="Logo" className={appStyles.Image}/>
        </div></Navbar.Brand>
        </NavLink >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
          <NavLink to='/' className={styles.NavLink} activeClassName={styles.Active} exact>
          <i className="fas fa-home"></i>
          Home</NavLink>
          {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavBar;
