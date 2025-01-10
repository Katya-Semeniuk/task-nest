import React, { useState, useEffect } from "react";
import ProfilesList from "../../components/ProfilesList";
import Loader from "../../components/Loader";
import { axiosReq } from "../../api/axiosDefault";
import { FcSearch } from "react-icons/fc";
import { SlClose } from "react-icons/sl";

import { Form } from "react-bootstrap";
import styles from "../../styles/TasksPage.module.css";


const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  console.log("ProfilesPage", profiles)

  useEffect(() => {
    setIsLoading(true);
    const fetchAllUsers = async () => {
      try {
        let url = "/profiles/";
          if (query) {
            url += `?search=${query}`;
          }
        const { data } = await axiosReq.get(url);
        setProfiles(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    const timer = setTimeout(() => {
      fetchAllUsers();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);


  const cleanSearchInput =()=> {
    setQuery("");
  }
  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Form
            className={`${styles.SearchBar} mb-3`}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.IconWrapper}>
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="find a user by the name or task title"
              />
              <FcSearch className={styles.IconSearch} />
              <SlClose  className={styles.IconClose} onClick={cleanSearchInput}/>
            </div>
          </Form>
          {profiles && profiles.length > 0 ? (
            <ProfilesList profiles={profiles} />
          ) : (
            <p>No users yet.</p>
          )}
        </>
      )}
    </div>
  );
  
};
export default ProfilesPage;
