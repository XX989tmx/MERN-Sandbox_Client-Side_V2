import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import GetSpecificUserList from "../components/GetSpecificUserList";
import { useParams, useHistory } from "react-router-dom";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";
import "./GetSpecificUser.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
const GetSpecificUser = () => {
  const userId = useParams().userId;
  const [UserArray, setUserArray] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async (params) => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL + `/users/getSpecificUser/${userId}`
        );
        const data = response.data;
        const user = data.result;
        console.log(user);
        setUserArray(user);

        function moveToTop(params) {
          window.scrollTo(0, 0);
        }
        moveToTop();
        if (!!user) {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && UserArray && (
        <div>
          {" "}
          <div
            style={{ backgroundColor: "" }}
            className="get-specific-user-container"
          >
            <GetSpecificUserList UserArray={UserArray} />
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default GetSpecificUser;
