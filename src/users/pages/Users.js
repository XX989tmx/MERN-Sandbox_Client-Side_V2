import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./Users.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users"
        );

        setLoadedUsers(responseData.users);
        console.log(responseData.users);
      } catch (err) {}
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && loadedUsers && (
        <div>
          {" "}
          <div className="users-container">
            <div className="main-container">
              <div className="post-form-area">
                <p style={{ color: "grey", textAlign: "left" }}>
                  if something does not work, please reload the page.
                </p>
                <UsersList items={loadedUsers} />
              </div>
            </div>
            {/* <div className="side-container"></div> */}
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default Users;
