import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import styles from "../styles/TaskForm.module.css";
import btnStyles from "../styles/Button.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRedirect } from "../hooks/useRedirect";
import { useCurrentUser } from "../contexts/CurrentUserContext";


import { axiosReq } from "../api/axiosDefault";
import { useHistory } from "react-router";

function TaskCreateForm() {
  useRedirect('loggedOut');

  const currentUser = useCurrentUser();
  const currentUserId = currentUser?.profile_id;

  const history = useHistory();
  
  const [assignedUsers, setAssignedUsers] = useState([]);

  const [errors, setErrors] = useState({});

  const [createTaskData, setCreateTaskData] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "medium",
    category: "work",
    status: "not-started",
    assigned_to: [],
  });
  

  useEffect(() => {
    fetchAllUsers();
  }, []);

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

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("due_date",  due_date);
    formData.append("priority", priority);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("assigned_to", assigned_to.length > 0 ? assigned_to : []);

    
    try {
      const { data } = await axiosReq.post("/tasks/", formData);
      console.log(data)
      history.push(`/tasks/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleMultiSelect = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => Number(option.value)
    );
    setCreateTaskData((prev) => ({
      ...prev,
      assigned_to:selectedOptions,
    }))
    console.log(" assigned_to in handleMultiSelect",  selectedOptions);
  };


  // A query for all users, then select from the assigned
  const fetchAllUsers = async () => {
    try {
      const { data } = await axiosReq.get("/profiles/");
    //  filter the array so that the current user cannot assign himself
      const filteredUsers = data.results.filter((user) => user.id !== currentUserId);
      setAssignedUsers(filteredUsers);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 200) {
        setErrors(err.response?.data);
      }
    }
  };

 
  return (
    <Container>
      <div className={styles.Container}>
        <button className={btnStyles.CustomBtn} onClick={() => history.goBack()}>
          {" "}
          <IoMdArrowRoundBack />
          Go back
        </button>
        <h2 className={styles.Title}>Create a task</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </Form.Group>
              {errors.title?.map((message, idx) => (
                <p className={styles.Alert} key={idx}>
                  {message}
                </p>
              ))}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  style={{ resize: "none" }}
                />
              </Form.Group>
              {errors.description?.map((message, idx) => (
                <p className={styles.Alert} key={idx}>
                  {message}
                </p>
              ))}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="priority">
                <Form.Label>Priority:</Form.Label>
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
              {errors.priority?.map((message, idx) => (
                <p className={styles.Alert} key={idx}>
                  {message}
                </p>
              ))}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
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
              {errors.category?.map((message, idx) => (
                <p className={styles.Alert} key={idx}>
                  {message}
                </p>
              ))}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="status">
                <Form.Label>Status:</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Not-started"
                    name="status"
                    value="not-started"
                    checked={status === "not-started"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="In-progress"
                    name="status"
                    value="in-progress"
                    checked={status === "in-progress"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Complete"
                    name="status"
                    value="complete"
                    checked={status === "complete"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              {errors.status?.map((message, idx) => (
                <p className={styles.Alert} key={idx}>
                  {message}
                </p>
              ))}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="due_date">
                <Form.Label>Due Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="due_date"
                  value={due_date}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.due_date?.map((message, idx) => (
                <p className={styles.Alert} key={idx}>
                  {message}
                </p>
              ))}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="assigned_to">
                <Form.Label>Assigne to:
                <p>To select multiple participants, press Ctrl and select the name</p> </Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  name="assigned_to"
                  onChange={handleMultiSelect}
                  value={assigned_to}
                >
                  {!assignedUsers ? (
                    <Loader />
                  ) : assignedUsers.length > 0 ? (
                    assignedUsers.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.owner}
                      </option>
                    ))
                  ) : (
                    <option disabled>No users available.</option>
                  )}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Button
            className={`${btnStyles.Button} ${btnStyles.Middle} ${btnStyles.Blue} ml-auto mr-auto`}
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

export default TaskCreateForm;
