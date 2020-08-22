import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from '../../shared/hooks/http-hook';
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

import './Users.css';
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const Users = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/users");

        

        setLoadedUsers(responseData.users);
      } catch (err) {
      
      }
    };
    fetchUsers();
  }, [sendRequest]);

 

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && (
        <div className="users-container">
          <div className="main-container">
            <div className="post-form-area">
              <p style={{ color: "grey", textAlign: "left" }}>
                if something does not work, please reload the page.
              </p>
              <UsersList items={loadedUsers} />
              <MoveToTopButton />
            </div>
          </div>
          {/* <div className="side-container"></div> */}
        </div>
        
      )}
      {!isLoading && loadedUsers && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default Users;
