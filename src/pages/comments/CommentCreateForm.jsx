import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import {Form, InputGroup  } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosRes } from "../../api/axiosDefault";

function CommentCreateForm(props) {
  
  const { task, setTask, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value)
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        task,
      });
      console.log(data)
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setTask((prevTask) => ({
        results: [
          {
            ...prevTask.results[0],
            comments_count: prevTask.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
  
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} />
            </Link>
            <Form.Control
              className={styles.Form}
              placeholder="my comment..."
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
            />
          </InputGroup>
        </Form.Group>
        <button
          className={`${btnStyles.Button} ${btnStyles.Bright} ${btnStyles.Orange}btn d-block ml-auto`}
          disabled={!content.trim()}
          type="submit"
        >
          post
        </button>
      </Form>
  
  );
}

export default CommentCreateForm;
