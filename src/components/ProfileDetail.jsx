import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
import {  useHistory } from "react-router";
import { Card, Container , Modal, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/ProfileDetail.module.css";
import btnStyles from "../styles/Button.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FcRight } from "react-icons/fc";
import {useCurrentUser} from "../contexts/CurrentUserContext";
import { MdDeleteOutline} from "react-icons/md";
import { axiosRes } from "../api/axiosDefault";



export const ProfileDetail = ({ userData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const history = useHistory();
 
  const { owner, created_at, tasks, tasks_count,  image, id } = userData;

  const currentUser = useCurrentUser();

  const is_owner = currentUser?.username === owner;

  const [completeTask, setCompleteTasks] = useState([]);
  const [inProgressTask, setInProgressTasks] = useState([]);
  const [notStartedTask, setNotStartedTasks] = useState([]);
  const [showTaskList, setShowTaskList] = useState(false);

  const divideTasks = (tasks) => {

    if (tasks && tasks.length > 0) {
      setCompleteTasks(tasks.filter((task) => task.status === "complete"));
      setInProgressTasks(tasks.filter((task) => task.status === "in-progress"));
      setNotStartedTasks(tasks.filter((task) => task.status === "not-started"));
    }
  };

  useEffect(() => {
    divideTasks(tasks);
  }, [tasks]);

  const toggleShowTaskList = () => {
    setShowTaskList(!showTaskList);
    console.log("toggleShowTaskList", showTaskList)
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
      <button className={btnStyles.CustomBtn} onClick={() => history.goBack()}>
          {" "}
          <IoMdArrowRoundBack />
          Go back
        </button>
        <Card className={styles.Card}>
          {is_owner && (
            <div className={styles.ButtonWrapper}>
              <button type="button" className={styles.ButtonEl} onClick={handleShow}><MdDeleteOutline /></button>
            </div>
          )}
        <Card.Body>
          <div className={styles.Header}>
            <div>
            <Avatar src={image} height={120} />
            <Card.Text className="small" >
            Registered since {created_at}
              </Card.Text></div>
           
            <div>
              <Card.Title className={styles.Title}>{owner}</Card.Title>
              <Card.Text className="text-center">
                Total tasks: {tasks_count}
              </Card.Text>
              <Card.Text className="d-flex">
                <div className={styles.Status}>
                  complete
                  {completeTask && <div>{completeTask.length}</div>}
                </div>
                <div className={styles.Status}>
                  in-progress
                  {inProgressTask && <div>{inProgressTask.length}</div>}
                </div>
                <div className={styles.Status}>
                  not-started
                  {notStartedTask && <div>{notStartedTask.length}</div>}
                </div>
              </Card.Text>
            </div>
          </div>

          <Card.Text className="mt-4">
            {tasks && tasks.length > 0 ? (
              <>
                <button type="button" onClick={toggleShowTaskList} className={`${btnStyles.Button} ${btnStyles.Dark} d-block ml-auto mr-auto`}>
                  {showTaskList ? (<> Close  <IoIosCloseCircleOutline /></>) : "Watch all tasks"} 
                </button>
                {showTaskList && (
                  <div className="mt-2">
                  {tasks.map((task) => (
                    <Link key={task.id} to={`/tasks/${task.id}`} className={styles.StyledLink}>
                      {task.title} <FcRight/>
                    </Link>
                  ))}
                  </div>
                )}
               
              </>
            ) : (
              <span>No tasks</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      {show && (
        <Modal
        className={styles.Modal}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.ModalTitle}>
              Are you sure you want to delete your account?{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            If you confirm the action, your account will be deleted permanently
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={btnStyles.Button}
              variant="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ml-2`}
              onClick={handleDelete}
            >
              YES
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    
    </Container>
  );
};

export default ProfileDetail;
