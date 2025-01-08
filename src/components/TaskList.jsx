import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/TaskList.module.css";
import { TbPointFilled } from "react-icons/tb";

function TaskList({ tasks }) {
  console.log("TaskList", tasks);

  return (
    <Container>
      {tasks.map((task) => (
        <Row key={task.id} className={styles.Box}>
          <Col>
            <Card className={styles.Card}>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    Posted by:<span className={styles.Name}> {task.owner}</span>
                  </div>
                  <Card.Title className={styles.Title}>{task.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {task.updated_at}
                  </Card.Subtitle>
                </div>

                <Card.Text className="mb-3">
                  <span className="mr-2">Description:</span>
                  {task.description}
                </Card.Text>
                <Card.Text className="mb-2">
                  {" "}
                  <TbPointFilled className={styles.Blue} />
                  <span className="mr-2">Status:</span> {task.status}
                </Card.Text>
                <Card.Text className="mb-2">
                  {" "}
                  <TbPointFilled className={styles.Blue} />
                  <span className="mr-2">Category:</span> {task.category}
                </Card.Text>
                <Card.Text className="mb-2">
                  {" "}
                  <TbPointFilled className={styles.Blue} />
                  <span className="mr-2">Comments:</span>
                  {task.comments_count}
                </Card.Text>

                <Card.Text>
                  <TbPointFilled className={styles.Blue} />
                  <span className="mr-2">Assigned To:</span>
                  {task.assigned_to?.length > 0 ? (
                    <span>
                      {task.assigned_to.length}{" "}
                      {task.assigned_to.length === 1 ? "user" : "users"}
                    </span>
                  ) : (
                    <span>No users assigned</span>
                  )}
                </Card.Text>

                <Card.Link className="d-flex justify-content-end">
                  <NavLink to={`/tasks/${task.id}`} className={styles.NavLink}>
                    See more<i class="fa-solid fa-arrow-right"></i>{" "}
                  </NavLink>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default TaskList;
