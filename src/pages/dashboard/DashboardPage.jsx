import img from "../../assets/img-1.png";
import styles from "../../styles/DashboardPage.module.css";
import btnStyles from "../../styles/Button.module.css"

import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { Container, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { LuFilePlus2 } from "react-icons/lu";



export const DashboardPage = () => {
  const currentUser = useCurrentUser();
  console.log(currentUser)
  return (
    <Container>
      {currentUser &&  (
        <>
          <Alert variant="info">
           <Card.Title className={styles.Title}>  Hello, {`${currentUser.username}`}</Card.Title>
  
  </Alert>
  <Link to={'/tasks/create'} className={`${btnStyles.Button} ${btnStyles.Blue} ${styles.Btn}  `}>Create a task <LuFilePlus2 /></Link></>
       
      
      )}
      <Card className={styles.Box}>
        <div>
          <img variant="top" src={img} width={320} className="rounded" alt="TaskNest logo"/>
        </div>

        <div >
          <Card.Title className={styles.Title}>TaskNest</Card.Title>
          <Card.Subtitle  className={styles.Subtitle}>
            Improve your productivity with us!
          </Card.Subtitle>

          <Card.Body>
            {" "}
           
            <Card.Text className="mb-2">
              TaskNest is an application in which you can create tasks,
              assigning different categories and statuses to tasks, which will
              allow you to track the number and priority of completion.
            </Card.Text>
            <Card.Text>
              Add other participants to work on the same task together and
              exchange comments. View other users' tasks and stay up to date
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};

export default DashboardPage;
