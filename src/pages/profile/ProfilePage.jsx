import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import ProfileDetail from "../../components/ProfileDetail";

export const ProfilePage = () => {
  const [userData, setUserData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const { data: userData } = await axiosReq.get(`/profiles/${id}`);
        console.log(userData);
        setUserData({ results: [userData] });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  //  useEffect(() => {
  //     const fetchUserData = async () => {
  //       try {
  //         const [{ data: userData }, { data: userTasks }] = await Promise.all([
  //           axiosReq.get(`/profiles/${id}`),
  //           axiosReq.get(`/profiles/?task=${id}`),
  //         ]);
  //         setTask({ results: [task] });
  //         setComments(comments);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     fetchUserData();
  //   }, [id]);

  return (
    <div>
      <ProfileDetail />
    </div>
  );
};

export default ProfilePage;
