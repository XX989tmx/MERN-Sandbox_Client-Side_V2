import React, { useEffect, useState } from "react";
import MyProfileList from "../components/MyProfileList";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";

const MyProfile = () => {
  const userId = useParams().userId;
  const [UserArray, setUserArray] = useState([]);
  const auth = useContext(AuthContext);
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
    <div>
      <MyProfileList UserArray={UserArray} />
    </div>
  );
};

export default MyProfile;
