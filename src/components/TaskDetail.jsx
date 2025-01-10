import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import Loader from "./Loader";
import {axiosRes} from "../api/axiosDefault";
import { Container, Row, Col, Card, Media, ListGroup, Modal, Button } from "react-bootstrap";
import styles from "../styles/TaskDetail.module.css";
import btnStyles from "../styles/Button.module.css";
import moment from "moment";

function TaskDetail(props) {
  const {
    id,
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
    comments_count,
    taskPage,
  } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  let formarredDate = moment(due_date).format("DD MMM YYYY");

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      handleClose();
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className={styles.Task} border="secondary">
            {title && (
              <Card.Header className="d-flex">
                <span className={styles.Title}> {title}</span>

                {is_owner && taskPage && (
                  <div className="ml-auto" >
                    <button className={styles.ButtonIcon} onClick={handleEdit}>
                      {" "}
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className={styles.ButtonIcon} onClick={handleShow}  >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    
                  </div>
                )}
              </Card.Header>
            )}

            <Card.Body className={styles.Body}>
              {currentUser && (
                <Media className="d-flex align-items-center justify-content-between mb-3">
                  <Link
                    to={`/profiles/${profile_id}`}
                    className="d-flex align-items-center"
                  >
                    <Avatar src={currentUser.profile_image} height={55} />
                    {owner}
                  </Link>
                  <div>
                    <div>Edited: {updated_at}</div>
                  </div>
                </Media>
              )}

              {description && (
                <Card.Text className="mb-2">
                  <div className={styles.Text}>Description:</div> {description}
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
                  <div className="d-flex justify-content-center align-items-center">
                    {" "}
                    <Loader />
                  </div>
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
                    <span className={styles.Text}>Is overdue!</span>{" "}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Row className="d-flex align-items-center">
                <Col>
                  {" "}
                  {status && (
                    <Card
                      className={`p-2 ${
                        status === "complete"
                          ? styles.Complete
                          : status === "not-started"
                          ? styles.NotStarted
                          : status === "in-progress"
                          ? styles.InProgress
                          : ""
                      }`}
                    >
                      <div>
                        {" "}
                        Status: <span>{status}</span>{" "}
                      </div>
                    </Card>
                  )}
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Link to={`/posts/${id}`}>
                    <i class="fa-regular fa-comments"></i>
                  </Link>
                  {comments_count}
                </Col>
                <Col className="d-flex justify-content-end">
                  {created_at && (
                    <div className="text-muted">
                      <span> Posted on:</span> {created_at}
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {show && (
        <Modal
        
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className={styles.ModalTitle}>
           
           Are you sure you want to delete the task? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        If you confirm the action, the task will be deleted permanently
        </Modal.Body>
        <Modal.Footer>
          <Button className={btnStyles.Button} variant="secondary" onClick={handleClose} >
          Cancel
          </Button>
          <Button className={`${btnStyles.Button} ml-2`} onClick={handleDelete}>YES</Button>
        </Modal.Footer>
      </Modal>
      )}
    </Container>
  );
}

export default TaskDetail;
