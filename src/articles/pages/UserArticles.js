import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyProfileSideNavigation from "../../users/components/MyProfileSideNavigation";
import "./UserArticles.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import Axios from "axios";

const UserArticles = () => {
  const [loadedArticles, setLoadedArticles] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [ArticleAuthor, setArticleAuthor] = useState({});

  const [
    averagePriceOfThisUsersArticles,
    setaveragePriceOfThisUsersArticles,
  ] = useState();
  const [
    sumOfPriceOfThisUsersArticles,
    setsumOfPriceOfThisUsersArticles,
  ] = useState();
  const [
    TotalCountOfThisUsersArticles,
    setTotalCountOfThisUsersArticles,
  ] = useState();

  const [articleCountNotification, setarticleCountNotification] = useState();
  const [
    AllOfImagesOfThisUsersArticles,
    setAllOfImagesOfThisUsersArticles,
  ] = useState([]);

  const userId = useParams().userId;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/articles/user/${userId}`
        );
        setLoadedArticles(responseData.articles);
        console.log(responseData.articles);
        setArticleAuthor(responseData.articles[0].author);
        const authorName = responseData.articles[0].author.name;
        const articleCount = responseData.articles.length;
        const articleCountNotification = `${authorName} has ${articleCount} articles `;
        setarticleCountNotification(articleCountNotification);
      } catch (err) {}
      Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/articles/averagePriceOfThisUsersArticles/${userId}`
      )
        .then((response) => {
          console.log(response.data);
          console.log(response.data.averagePriceOfThisUsersArticles);
          console.log(response.data.sumOfPrice);
          setaveragePriceOfThisUsersArticles(
            response.data.averagePriceOfThisUsersArticles
          );
          setsumOfPriceOfThisUsersArticles(response.data.sumOfPrice);
          setTotalCountOfThisUsersArticles(response.data.count);
        })
        .catch((err) => {
          console.log(err);
        });
      Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/articles/getAllImagesOfUsersArticles/${userId}`
      )
        .then((response) => {
          console.log(response.data);
          setAllOfImagesOfThisUsersArticles(response.data.imagesArray);
        })
        .catch((err) => {});
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: "20%",
          }}
        >
          {" "}
          <div className="user-articles-container">
            <div className="main-container">
              <h3 className="center">
                {new String(ArticleAuthor.name).toUpperCase()}'s Articles
              </h3>
              <h4>{articleCountNotification}</h4>
              <ArticleList
                items={loadedArticles}
                onDeleteArticle={articleDeletedHandler}
              />
              <div>
                <h5>analytics</h5>
                <ul>
                  <li>
                    <h5>
                      Total Price of This Users articles:{" "}
                      <h3>{sumOfPriceOfThisUsersArticles}</h3>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Average Price of This Users Articles:
                      <h3>{averagePriceOfThisUsersArticles}</h3>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Total Count of This Users Articles:
                      <h3>{TotalCountOfThisUsersArticles}</h3>
                    </h5>
                  </li>
                </ul>
              </div>
              <div>
                <h5>image index(this user is using a following images)</h5>
                <ul className="image-index-list">
                  {" "}
                  {AllOfImagesOfThisUsersArticles.map(function (elm, index) {
                    return (
                      <li className="image-index-items" key={index}>
                        {" "}
                        <img
                          src={elm}
                          style={{ width: "150px", height: "80px" }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* <div className="side-container"></div> */}
          </div>
          <div
            style={{ padding: "20px", width: "400px" }}
            className="my-profile-sidebar-area"
          >
            <MyProfileSideNavigation />
          </div>
        </div>
      )}
      {!isLoading && loadedArticles && <FooterMainNavigation />}
      <MoveToTopButton />
    </React.Fragment>
  );
};

export default UserArticles;
