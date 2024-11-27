import notFoundPageImg from '../assets/page-not-found.webp';
import styles from '../styles/NotFound.module.css';
import { NavLink } from "react-router-dom";
import {Container} from "react-bootstrap";
import appStyles from '../App.module.css';



const NotFound = () => {
return (
    <Container>
        <div className={styles.ImageWrapper}>
        <img src={notFoundPageImg} alt="Page not found" className={appStyles.Image}/>
        </div>
        <p className="mt-5 text-center"> Go to the  <NavLink to='/' className={styles.NavLink}>Home Page </NavLink></p>
        

     
    </Container>
)
}

export default NotFound;