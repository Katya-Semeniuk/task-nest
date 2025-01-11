import React, { useState, useEffect } from "react";
import {  useHistory } from "react-router";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

import { Card, Container , Modal, Button} from "react-bootstrap";

import styles from "../styles/ProfileDetail.module.css";
import btnStyles from "../styles/Button.module.css";

import {useCurrentUser,  useSetCurrentUser,} from "../contexts/CurrentUserContext";
import { axiosRes } from "../api/axiosDefault";
import axios from "axios";

import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FcRight } from "react-icons/fc";

import { MdDeleteOutline} from "react-icons/md";





export const ProfileDetail = ({ userData }) => {
  // modal window functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { owner, created_at, tasks, tasks_count,  image, id } = userData;
  
  const history = useHistory();
  
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
 
  const is_owner = currentUser?.username === owner;

// states for storing tasks by status
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
    const handleSignOut = async () => {
      try {
        await axios.post("dj-rest-auth/logout/");
        setCurrentUser(null); 
        history.push('/'); 
      } catch (err) {
        console.log("Error during sign out:", err);
      }
    };
  
    try {
      // delete profile
      await axiosRes.delete(`/profiles/${id}/`);
      handleSignOut(); 
      handleClose(); 
    } catch (err) {
      console.log("Error during profile deletion:", err);
    }
  };
  

  return (
    <Container>
      <button className={btnStyles.CustomBtn} onClick={() => history.goBack()}>
          {" "}
          <IoMdArrowRoundBack />
          Go back
        </button>
       {tasks ?  (<Card className={styles.Card}>
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
      </Card>) : <Card.Text >It looks like there is no user data</Card.Text >}
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
