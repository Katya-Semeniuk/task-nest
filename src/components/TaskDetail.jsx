import { Link} from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import Loader from "./Loader";
import {
  Container,
  Row,
  Col,
  Card,
  Media,
  ListGroup
} from "react-bootstrap";
import styles from "../styles/TaskDetail.module.css";

function TaskDetail(props) {
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
    taskPage
  } = props;
console.log(is_overdue)
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Card className={styles.Task}>
            {currentUser && (
              <Card.Header>
                <Media className="d-flex align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`} className="d-flex align-items-center">
                  <Avatar src={currentUser.profile_image} height={55} />
                  {owner}
                </Link>
              </Media>
              </Card.Header>
            )}
            <Card.Body>
            {title && <Card.Title className={styles.Title}>{title}</Card.Title>}
            </Card.Body>
            <Card.Body>
              {description && <Card.Text><span className={styles.Text}>Description:</span>  {description}</Card.Text>}
            </Card.Body>
            <Card.Body>
              <ListGroup variant="flush">
                {category && (
                  <ListGroup.Item> <span className={styles.Text}>Category:</span>  {category}</ListGroup.Item>
                )}
                {priority && (
                  <ListGroup.Item> <span className={styles.Text}>Priority:</span> {priority} </ListGroup.Item>
                )}
                {status && <ListGroup.Item> <span className={styles.Text}>Status:</span> {status}</ListGroup.Item>}
                {!assigned_users ? (
                   <Loader/>
                ) : assigned_users.length > 0 ? (
                  <ListGroup.Item>
                    <span className={styles.Text}>Assigned_to:</span> 
                    {" "}
                    {assigned_users.map((user) => (
                      <p key={user.id}>{user.username}</p>
                    ))}
                  </ListGroup.Item>
                ) : (
                  <p>No users assigned.</p>
                )}
                <ListGroup.Item className="d-flex justify-content-between">
                
                {created_at && (
                  <span> Created_at: {created_at}</span>
                )}
                {due_date && (
                  <span> Due_date: {due_date}</span>
                )}
                </ListGroup.Item>
                {is_overdue && (
                  <ListGroup.Item> <span className={styles.Text}>Is_overdue:</span>  {is_overdue}</ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
            <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && taskPage && "...DropdownMenu"}
          </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskDetail;
