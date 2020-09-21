import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import "./UserArticles.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import Axios from "axios";

const UserArticles = () => {
  const [loadedArticles, setLoadedArticles] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [ArticleAuthor, setArticleAuthor] = useState({});

  const [averagePriceOfThisUsersArticles, setaveragePriceOfThisUsersArticles] = useState();
  const [sumOfPriceOfThisUsersArticles, setsumOfPriceOfThisUsersArticles] = useState();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/articles/user/${userId}`
        );
        setLoadedArticles(responseData.articles);
        setArticleAuthor(responseData.articles[0].author);
      } catch (err) {}
      Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/articles/averagePriceOfThisUsersArticles/${userId}`
      ).then((response) => {
        console.log(response.data);
        console.log(response.data.averagePriceOfThisUsersArticles);
        console.log(response.data.sumOfPrice);
        setaveragePriceOfThisUsersArticles(
          response.data.averagePriceOfThisUsersArticles
        );
        setsumOfPriceOfThisUsersArticles(response.data.sumOfPrice);
      }).catch((err) => {
        console.log(err);
      });;
    };
    fetchArticles();
  }, [sendRequest, userId]);

  const articleDeletedHandler = (deletedArticleId) => {
    setLoadedArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== deletedArticleId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedArticles && (
        <div className="user-articles-container">
          <div className="main-container">
            <h3 className="center">
              {new String(ArticleAuthor.name).toUpperCase()}'s Articles
            </h3>
            <ArticleList
              items={loadedArticles}
              onDeleteArticle={articleDeletedHandler}
            />
            <ul>
              <li>
                <h5>
                  Total Price of This Users articles:{" "}
                  <h3>{sumOfPriceOfThisUsersArticles}</h3>
                </h5>
              </li>
              <li>
                <h5>Average Price of This Users Articles:
                  <h3>{averagePriceOfThisUsersArticles}</h3>
                </h5>
              </li>
            </ul>
            <MoveToTopButton />
          </div>
          {/* <div className="side-container"></div> */}
        </div>
      )}
      {!isLoading && loadedArticles && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default UserArticles;
