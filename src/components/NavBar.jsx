import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo-1.png';
import styles from '../styles/NavBar.module.css';
import appStyles from '../App.module.css';
import Avatar from "./Avatar";
import {useCurrentUser,  useSetCurrentUser,} from '../contexts/CurrentUserContext';
import axios from "axios";
import useClickOutsideToggle from "../hooks//useClickOutsideToggle";



const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();


  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addTaskIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/tasks/create"
    >
      <i class="fa-solid fa-list-check"></i>Add task
    </NavLink>
  );

  const loggedInIcons = (<>
   <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/assigned"
      >
        <i class="fa-solid fa-file-signature"></i>Assigned
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </></>);

  const loggedOutIcons = (<>
  <NavLink to='/signin' className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            Sign In</NavLink>
            <NavLink to='/signup' className={styles.NavLink} activeClassName={styles.Active}>
            <i className="fas fa-user-plus"></i>
            Sign Up</NavLink></>)

  return (
      <Navbar expanded={expanded} bg="light" expand="md">
        <Container>
        <NavLink to='/' className={styles.NavLink} activeClassName={styles.Active}>
        <Navbar.Brand >
        <div className={styles.LogoWrapper}>
        <img src={logo} alt="Logo" className={appStyles.Image}/>
        </div></Navbar.Brand>
        </NavLink >
        {currentUser && addTaskIcon}
        <Navbar.Toggle 
        ref={ref}
         onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />
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
