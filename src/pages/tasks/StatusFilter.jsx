import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";

export const StatusFilter = () => {
  const [completeTasks, setCompleteTask] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [notStartedTasks, setNotStartedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCompleteTasks = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosReq.get(`/tasks/?status=complete`);
      setCompleteTask(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchInProgressTasks = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosReq.get(`/tasks/?status=in-progress`);
      setInProgressTasks(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNotStartedTasks = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosReq.get(`/tasks/?status=not-started`);
      setNotStartedTasks(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompleteTasks();
    fetchInProgressTasks();
    fetchNotStartedTasks();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        // complete tasks
        <div>
        <div>
          {completeTasks?.length > 0 ? (
            <span>
              {completeTasks.length}{" "}
             completed tasks
            </span>
          ) : (
            <span>No complete tasks</span>
          )}
        </div>
        {/* in-progress */}
        <div>
        {inProgressTasks?.length > 0 ? (
          <span>
            {inProgressTasks.length}{" "}
            tasks with status "In-Progress" 
          </span>
        ) : (
          <span>No inProgressTasks tasks</span>
        )}
      </div>
      {/* not started */}
      <div>
        {notStartedTasks?.length > 0 ? (
          <span>
            {notStartedTasks.length}{" "}
           task with status  "not-Started"
          </span>
        ) : (
          <span>No not Started tasks</span>
        )}
      </div>
      </div>
      )}
    </div>
  );
};

export default StatusFilter;
