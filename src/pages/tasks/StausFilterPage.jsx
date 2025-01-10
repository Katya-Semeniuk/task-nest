import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import TaskList from "../../components/TaskList";
import Loader from "../../components/Loader";
import { IoMdArrowRoundBack } from "react-icons/io";

import btnStyle from "../../styles/Button.module.css";


export const StausFilterPage = ({message, filter}) => {

  const [tasks, setTasks] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const history = useHistory();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true)
        const { data } = await axiosReq.get(`/tasks/${filter}`);
        console.log(data.results)
        setTasks(data);
        setIsLoading(false)
      } catch (err) {
        console.log(err);
      }
      finally{
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, [filter, pathname]);

  return <div>
    {isLoading ? (
       <div className="d-flex justify-content-center align-items-center">
                     <Loader />
                   </div>
    ) : (tasks.results.length ? (
    <div>
        <button className={btnStyle.CustomBtn} onClick={() => history.goBack()}>
          {" "}
          <IoMdArrowRoundBack />
          Go back
        </button>
        <TaskList tasks={tasks.results}/>
    </div>
   ) : (<div>
        <p className="text-center m-3">{message}</p>
        <button className={btnStyle.CustomBtn} onClick={() => history.goBack()}>
          {" "}
          <IoMdArrowRoundBack />
          Go back
        </button>
        </div>))}
  </div>;
};

export default StausFilterPage;
