import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import ArticleCommentHistoryOfThisUserList from "../components/ArticleCommentHistoryOfThisUserList";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";
import "./ArticleCommentHistoryOfThisUser.css";

const ArticleCommentHistoryOfThisUser = () => {
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
      } catch (error) {
        console.log(error);
      }
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && UserArray && (
        <div>
          {" "}
          <div className="article-comment-history-of-this-user-container">
            <ArticleCommentHistoryOfThisUserList UserArray={UserArray} />
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default ArticleCommentHistoryOfThisUser;
