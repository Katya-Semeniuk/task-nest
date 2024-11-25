import notFoundPageImg from '../assets/page-not-found.webp';
// import notFoundPageImg from '../assets/not-found.jpg';
import styles from '../styles/NotFound.module.css';
import { NavLink } from "react-router-dom";
import {Container} from "react-bootstrap";



const NotFound = () => {
return (
    <Container>
        <div className={styles.ImageWrapper}>
        <img src={notFoundPageImg} alt="Page not found" className={styles.Image}/>
        </div>
        <p className="mt-5 text-center"> Go to the  <NavLink to='/' className={styles.NavLink}>Home Page </NavLink></p>
        

     
    </Container>
)
}

export default NotFound;