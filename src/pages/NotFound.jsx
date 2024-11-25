import notFoundPageImg from '../assets/page-not-found.webp';
// import notFoundPageImg from '../assets/not-found.jpg';
import styles from '../styles/NotFound.module.css';


const NotFound = () => {
return (
    <div>
        <div className={styles.ImageWrapper}>
        <img src={notFoundPageImg} alt="Page not found" className={styles.Image}/>
        </div>
        {/* <img src={notFoundPageImg} alt="Page not found" /> */}
    </div>
)
}

export default NotFound;