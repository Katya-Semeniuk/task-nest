import { Link } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import Loader from "./Loader";
import { Container, Row, Col, Card, Media, ListGroup } from "react-bootstrap";
import styles from "../styles/TaskDetail.module.css";
import moment from "moment";

function TaskDetail(props) {
  // console.log(props)
  const {
    assigned_users,
    category,
    created_at,
    description,
    due_date,
    is_overdue,
    owner,
    priority,
    profile_id,
    status,
    title,
    updated_at,
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  let formarredDate = moment(due_date).format("DD MMM YYYY");

  

  return (
    <Container>
      <Row >
        <Col>
          <Card className={styles.Task} border="secondary">
            {title && (
              <Card.Header className={styles.Title}>{title}</Card.Header>
            )}

            <Card.Body>
              {currentUser && (
                <Media className="d-flex align-items-center justify-content-between mb-3">
                  <Link
                    to={`/profiles/${profile_id}`}
                    className="d-flex align-items-center"
                  >
                    <Avatar src={currentUser.profile_image} height={55} />
                    {owner}
                  </Link>
                  <div className="d-flex align-items-center">
                    <span>{updated_at}</span>
                    {is_owner && taskPage && "...DropdownMenu"}
                  </div>
                </Media>
              )}
            
            
              {description && (
                <Card.Text className="mb-2">
                  <div className={styles.Text}>Description:</div>{" "}
                  {description}
                </Card.Text>
              )}
            
            
              <ListGroup variant="flush">
                {category && (
                  <ListGroup.Item>
                    {" "}
                    <span className={styles.Text}>Category:</span> {category}
                  </ListGroup.Item>
                )}
                {priority && (
                  <ListGroup.Item>
                    {" "}
                    <span className={styles.Text}>Priority:</span> {priority}{" "}
                  </ListGroup.Item>
                )}
                
                {!assigned_users ? (
                  <div className="d-flex justify-content-center align-items-center"> <Loader/></div>
                 
                ) : assigned_users.length > 0 ? (
                  <ListGroup.Item>
                    <span className={styles.Text}>Assigned_to:</span>{" "}
                    {assigned_users.map((user) => (
                      <Link key={user.id}>
                        {" "}
                        <span className={styles.StyledLink}>
                          {user.username}
                        </span>{" "}
                      </Link>
                    ))}
                  </ListGroup.Item>
                ) : (
                  <p>No users assigned.</p>
                )}

                {due_date && (
                  <ListGroup.Item>
                    <span className={styles.Text}> Due Date:</span>{" "}
                    {formarredDate}
                  </ListGroup.Item>
                )}

                {is_overdue && (
                  <ListGroup.Item>
                    {" "}
                    <span className={styles.Text}>Is_overdue:</span>{" "}
                    {is_overdue}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
            <Card.Footer >
              <Row>
                <Col> {status && (
                  <Card  className={`p-2 ${status === "complete" ? styles.Complete : 
                    status === "not-started" ? styles.NotStarted : 
                    status === "in-progress" ? styles.InProgress : ""}`}>
                    <div> Status: <span >{status}</span> </div>
                   
                  </Card>
                )}</Col>
                <Col className="d-flex align-items-center justify-content-end">
                {created_at && (
                <div className="text-muted">
                  <span> Posted on:</span> {created_at}
                </div>
              )}</Col>
              </Row>
            
              
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskDetail;
