import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/TaskList.module.css";


function TaskList({ tasks }) {
  console.log("TaskList", tasks);

  return (
    <Container>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id}>
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {task.updated_at}
                  </Card.Subtitle>
                </div>

                <Card.Text>{task.description}</Card.Text>
                <Card.Text> <span>Status:</span>  {task.status}</Card.Text>

                <Card.Text>{task.comments_count}</Card.Text>

                <Card.Text>
                  <span className="mr-2">Assigned_to:</span>
                  {tasks.assigned_users && tasks.assigned_users.length > 0 ? (
                    tasks.assigned_users.map((user) => (
                      <span key={user.id}>{user.username}</span>
                    ))
                  ) : (
                    <span >No users assigned.</span>
                  )}
                </Card.Text>

                <Card.Link className="d-flex justify-content-end">
                  <NavLink to={`/tasks/${task.id}`} className={styles.NavLink}>See more<i class="fa-solid fa-arrow-right"></i> </NavLink>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TaskList;
