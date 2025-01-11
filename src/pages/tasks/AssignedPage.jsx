import React, { useState, useEffect } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import styles from "../../styles/AssignedPage.module.css";
import { Link } from "react-router-dom";

export const AssignedPage = () => {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id;

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { assigned_to_tasks, tasks } = userData;

  console.log("userData", userData);
  console.log("assigned_to_tasks", assigned_to_tasks);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        if (profile_id) {
          const { data: userData } = await axiosReq.get(
            `/profiles/${profile_id}`
          );
          console.log(userData);
          setUserData(userData);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (profile_id) {
      fetchUserData();
    }
  }, [profile_id]);

  return (
    <Container>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-2">
          <Loader />
        </div>
      ) : (
        <Row>
          <Col md="7">
            <Card className={styles.Card}>
              <h3 className={styles.Title}>Tasks you have been assigned to:</h3>
              {profile_id && (
                <ul>
                  {assigned_to_tasks?.length > 0 ? (
                    assigned_to_tasks.map((task) => (
                      <li key={task.id} className={styles.Item}>
                        <Link to={`/tasks/${task.id}`}>
                          <p>{task.title}</p>
                          <p className="small text-muted">
                            {" "}
                            from - {task.owner}
                          </p>{" "}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>You have no assigned tasks.</p>
                  )}
                </ul>
              )}
            </Card>
          </Col>
          <Col className="d-none d-md-block">
            <Card className={styles.Card}>
              <h3 className="text-center mb-3">Your own created tasks</h3>
              <ListGroup variant="flush">
                {tasks?.length > 0 ? (
                  tasks.map((task) => (
                    <Link
                      key={task.id}
                      to={`/tasks/${task.id}`}
                      className={styles.CardItem}
                    >
                      <ListGroup.Item className="rounded d-flex justify-content-between">
                        <p className="font-weight-bold">{task.title}</p>

                        <p
                          className={`${styles.Status} ${
                            task.status === "complete"
                              ? styles.Complete
                              : task.status === "not-started"
                              ? styles.NotStarted
                              : task.status === "in-progress"
                              ? styles.InProgress
                              : ""
                          }`}
                        >
                          {task.status}
                        </p>
                      </ListGroup.Item>{" "}
                    </Link>
                  ))
                ) : (
                  <p>You have no created tasks.</p>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AssignedPage;
