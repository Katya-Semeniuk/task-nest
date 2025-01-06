import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import TaskDetail from "../../components/TaskDetail";


const TaskPage = () => {
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
        <TaskDetail {...task.results[0]} setTask={setTask} taskPage/>
    </div>
  );
};

export default TaskPage;
