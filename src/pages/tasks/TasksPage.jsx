import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TaskList from "../../components/TaskList";
import Loader from "../../components/Loader";
import btnCreate from "../../styles/NotFound.module.css";
import btnStyles from "../../styles/Button.module.css";


import { axiosReq } from "../../api/axiosDefault";
import { Container, Row, Col, Button } from "react-bootstrap";

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
    <Container>
      <Row >
        <Col className="d-flex justify-content-center">
          <Button  className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`} type="button">
            <NavLink to="/tasks/complete">Completed</NavLink>
          </Button>

          <Button type="button"  className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`}>
          <NavLink to="/tasks/progress"> In-progress</NavLink>
           
          </Button>

          <Button type="button"  className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`}>
          <NavLink to="/tasks/notstarted"> Not-started</NavLink>
            
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Loader />
            </div>
          ) : tasks.length > 0 ? (
            <TaskList tasks={tasks} />
          ) : (
            <div>
              <p>No tasks yet.</p>
              <NavLink className={btnCreate.NavLink} to="/tasks/create">
                <i class="fa-solid fa-square-plus"></i>Create task
              </NavLink>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TasksPage;
