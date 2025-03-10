import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Card } from "react-bootstrap";
import Avatar from "./Avatar";
import styles from "../styles/ProfilesList.module.css";
import { FcNext } from "react-icons/fc";

const ProfilesList = ({ profiles }) => {
  // From the array of all users, we select users whose is_owner = false
  //  so that the profile of the logged in user does not get into the render
  return (
    <Container>
      {profiles
        .filter((user) => user.is_owner === false)
        .map((user) => (
          <Link key={user.id} to={`/profiles/${user.id}`}>
            <Card className={styles.Card}>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <Avatar src={user.image} />
                    <Card.Title className={styles.Title}>
                      {user.owner}
                    </Card.Title>
                  </div>
                  <Card.Text className={styles.TextUpdate}>
                    Updated at: {user.updated_at}
                  </Card.Text>
                </div>
                <Card.Text className="mb-2">
                  <FcNext /> <span className={styles.Text}>Tasks:</span>
                  {user.tasks?.length > 0 ? (
                    <>
                      {user.tasks.length === 1 ? (
                        <span>{user.tasks.length} task</span>
                      ) : (
                        <span>{user.tasks.length} tasks</span>
                      )}
                    </>
                  ) : (
                    <span>No tasks yet</span>
                  )}
                </Card.Text>
                <Card.Text>
                  <FcNext />{" "}
                  <span className={styles.Text}>Account created at:</span>{" "}
                  {user.created_at}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
    </Container>
  );
};
export default ProfilesList;
