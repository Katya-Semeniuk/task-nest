import img from "../../assets/img-1.png";
import styles from "../../styles/DashboardPage.module.css";

import { Container, Card } from "react-bootstrap";

export const DashboardPage = () => {
  return (
    <Container>
      <Card className={styles.Box}>
        <div>
          <img variant="top" src={img} width={320} className="rounded" />
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
