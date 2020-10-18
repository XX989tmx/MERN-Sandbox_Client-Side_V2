import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ArticleCommentHistoryOfThisUserList from "../components/ArticleCommentHistoryOfThisUserList";

const ArticleCommentHistoryOfThisUser = () => {
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
    <div>
      <ArticleCommentHistoryOfThisUserList UserArray={UserArray} />
    </div>
  );
};

export default ArticleCommentHistoryOfThisUser;
