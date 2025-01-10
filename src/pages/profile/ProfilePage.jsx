import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import ProfileDetail from "../../components/ProfileDetail";

export const ProfilePage = () => {
  const [userData, setUserData] = useState( [] );
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams();
  console.log("ProfilePage", userData)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const { data: userData } = await axiosReq.get(`/profiles/${id}`);
        setUserData(userData);
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



  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-2"><Loader/></div>
        ) : (<ProfileDetail userData={userData}/>)}
      
    </div>
  );
};

export default ProfilePage;
