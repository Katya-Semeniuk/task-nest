import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import TaskDetail from "../../components/TaskDetail";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader";
import styles from "../../styles/TaskPage.module.css";

const TaskPage = () => {
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;

  const { id } = useParams();
  const [task, setTask] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const [{ data: task }, { data: comments }] = await Promise.all([
          axiosReq.get(`/tasks/${id}`),
          axiosReq.get(`/comments/?task=${id}`),
        ]);
        setTask({ results: [task] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTask();
  }, [id]);

  return (
    <div>
      <TaskDetail {...task.results[0]} setTask={setTask} taskPage />

      <div className={styles.Container}>
        {currentUser ? (
          <CommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            task={id}
            setTask={setTask}
            setComments={setComments}
          />
        ) : comments.results.length ? (
          "Comments"
        ) : null}
        {comments.results.length ? (
          <InfiniteScroll
            children={comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setTask={setTask}
                setComments={setComments}
              />
            ))}
            dataLength={comments.results.length}
            loader={<Loader />}
            hasMore={!!comments.next}
            next={() => fetchMoreData(comments, setComments)}
          />
        ) : currentUser ? (
          <div className={styles.Text}>
            No comments yet, be the first to comment!{" "}
          </div>
        ) : (
          <span>No comments... yet</span>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
