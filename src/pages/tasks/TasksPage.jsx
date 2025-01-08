import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TaskList from "../../components/TaskList";
import Loader from "../../components/Loader";
import btnCreate from "../../styles/NotFound.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/TasksPage.module.css";
import { FcSearch } from "react-icons/fc";

import { axiosReq } from "../../api/axiosDefault";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
       
        let url = "/tasks/";
        if (query) {
          url += `?search=${query}`;
        }
        const { data } = await axiosReq.get(url);
        setTasks(data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchAllTasks();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`}
            type="button"
          >
            <NavLink to="/tasks/complete">Completed</NavLink>
          </Button>

          <Button
            type="button"
            className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`}
          >
            <NavLink to="/tasks/progress"> In-progress</NavLink>
          </Button>

          <Button
            type="button"
            className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`}
          >
            <NavLink to="/tasks/notstarted"> Not-started</NavLink>
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.IconWrapper}>
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="find a task by entering the task title or author "
            />
            <FcSearch  className={styles.Icon}/>
            </div>
          </Form>
          
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Loader />
            </div>
          ) : tasks && tasks.length > 0 ? (
            <TaskList tasks={tasks} setTasks={setTasks}/>
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
