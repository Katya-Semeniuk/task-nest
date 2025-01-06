import React, { useState, useEffect } from "react";
import ProfilesList from "../../components/ProfilesList";
import Loader from "../../components/Loader";
import { axiosReq } from "../../api/axiosDefault";

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  const fetchAllUsers = async () => {
    try {
        setIsLoading(true); 
      const { data } = await axiosReq.get("/profiles/");
      setProfiles(data.results);
    } catch (err) {
      console.log(err);
    }
    finally {
        setIsLoading(false); 
      }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
    {isLoading ? ( 
        <div className="d-flex justify-content-center align-items-center"><Loader /></div>
      
    ) : profiles.length > 0 ? ( 
      <ProfilesList profiles={profiles} />
    ) : ( 
      <p>No users yet.</p>
    )}
  </div>
  );
};
export default ProfilesPage;
