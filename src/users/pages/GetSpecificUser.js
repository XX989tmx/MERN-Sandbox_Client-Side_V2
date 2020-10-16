import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import GetSpecificUserList from "../components/GetSpecificUserList";
import { useParams, useHistory } from "react-router-dom";
import "./GetSpecificUser.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
const GetSpecificUser = () => {
  const userId = useParams().userId;
  const [UserArray, setUserArray] = useState([]);
  useEffect(() => {
    const fetch = async (params) => {
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL + `/users/getSpecificUser/${userId}`
        );
        const data = response.data;
        const user = data.result;
        console.log(user);
        setUserArray(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      <div className="get-specific-user-container">
        <GetSpecificUserList UserArray={UserArray} />
      </div>
      <MoveToTopButton />
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default GetSpecificUser;
