import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Card } from "react-bootstrap";
import Avatar from "./Avatar";
import styles from "../styles/ProfilesList.module.css";
import { FcNext } from "react-icons/fc";

const ProfilesList = ({ profiles }) => {
  console.log(profiles);
  return (
    <Container>
      {profiles.map((user) => (
        <Link key={user.id} to={`/profiles/${user.id}`}>
          <Card className={styles.Card}>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center ">
                <Avatar src={user.image} />
                <Card.Title className={styles.Title}>{user.owner}</Card.Title>
              </div>
              <Card.Text className="text-muted">
                Updated at: {user.updated_at}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              {" "}
              <Card.Text className="mb-2">
                {" "}
                <FcNext /> <span className={styles.Text}>Tasks:</span> {user.tasks_count} tasks
              </Card.Text>
              <Card.Text>
                {" "}
                <FcNext /> <span className={styles.Text}>Account created at:</span> {user.created_at}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </Container>
  );
};
export default ProfilesList;
