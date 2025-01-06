import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TaskList from "../../components/TaskList";
import Loader from "../../components/Loader";
// import styles from "../../styles/TasksPage.module.css";
import btnStyles from "../../styles/NotFound.module.css";

import { axiosReq } from "../../api/axiosDefault";
import { Row, Col } from "react-bootstrap";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosReq.get("/tasks/");
        setTasks(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllTasks();
  }, []);
  return (
    <div>
      <Row className="h-100">
        <Col >
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Loader />
            </div>
          ) : tasks.length > 0 ? (
            <TaskList tasks={tasks} />
          ) : (
            <div>
              <p>No tasks yet.</p>
              <NavLink
                className={btnStyles.NavLink}
                to="/tasks/create"
              >
                <i class="fa-solid fa-square-plus"></i>Create task
              </NavLink>
            </div>
          )}
        </Col>
        {/* <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <p>Popular tasks for desktop</p>
        </Col> */}
      </Row>
    </div>
  );
};

export default TasksPage;
