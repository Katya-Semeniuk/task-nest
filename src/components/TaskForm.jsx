import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import styles from "../styles/TaskForm.module.css";
import btnStyles from "../styles/Button.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";

import axios from "axios";

function TaskForm() {
  const [createTaskData, setCreateTaskData] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "medium",
    category: "work",
    status: "not started",
    assigned_to: [], // Масив для призначення користувачів
  });

  const {
    title,
    description,
    due_date,
    priority,
    category,
    status,
    assigned_to,
  } = createTaskData;

  const handleChange = (event) => {
    setCreateTaskData({
      ...createTaskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/tasks/create/", createTaskData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMultiSelect = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCreateTaskData((prev) => ({
      ...prev,
      assigned_to: selectedOptions,
    }));
  };

  return (
    <Container>
      <div className={styles.Container}>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
               
                  as="textarea"
                  rows={3}
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  style={{ resize: 'none' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="priority">
                <Form.Label>Priority</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="High"
                    name="priority"
                    value="high"
                    checked={priority === "high"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Medium"
                    name="priority"
                    value="medium"
                    checked={priority === "medium"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Low"
                    name="priority"
                    value="low"
                    checked={priority === "low"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Work"
                    name="category"
                    value="work"
                    checked={category === "work"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Home"
                    name="category"
                    value="home"
                    checked={category === "home"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Others"
                    name="category"
                    value="others"
                    checked={category === "others"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="NOT-STARTED"
                    name="status"
                    value="not started"
                    checked={status === "not started"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="IN-PROGRESS"
                    name="status"
                    value="in-rpogress"
                    checked={status === "in-rpogress"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="COMPLETE"
                    name="status"
                    value="completed"
                    checked={status === "completed"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="due_date">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="due_date"
                  value={due_date}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="assigned_to">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  name="assigned_to"
                  onChange={handleMultiSelect}
                >
                  {/* Припустимо, список користувачів передається через пропс users */}
                  <option value="1">User 1</option>
                  <option value="2">User 2</option>
                  <option value="3">User 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Button
            className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue}`}
            type="submit"
          >
            Create Task
            <MdOutlineLibraryAdd className="ml-2" />
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default TaskForm;
