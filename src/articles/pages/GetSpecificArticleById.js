import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ArticleItem from "../components/ArticleItem";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

import './GetSpecificArticleById.css';

const GetSpecificArticleById = () => {
const { isLoading, error, sendRequest, clearError } = useHttpClient();
const articleId = useParams().articleId;
const [Article, setArticle] = useState({});
const [ArticleAuthor, setArticleAuthor] = useState({});

useEffect(() => {
  const getArticleById = async (params) => {
    try {
      const responseData = await sendRequest(
        process.env
          .REACT_APP_BACKEND_URL + `/articles/get_specific_article_by_id/${articleId}`
      );
      console.log(responseData);
      console.log(responseData.article);
      console.log(responseData.article.author);
      console.log(responseData.article.author.name);
      setArticle(responseData.article);
      setArticleAuthor(responseData.article.author);
    } catch (error) {}
    // window.scrollTo(0, 0);
  };
  getArticleById();
}, [sendRequest]);


    return (
      <React.Fragment>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && Article && (
          <div className="getSpecificArticleById-container">
            <div className="main-container">
              <div>
                <ArticleItem
                  key={Article.id}
                  id={Article.id}
                  image={Article.image}
                  title={Article.title}
                  content={Article.content}
                  authorName={ArticleAuthor.name}
                  authorEmail={ArticleAuthor.email}
                  authorId={ArticleAuthor._id}
                  categories={Article.categories}
                  tags={Article.tags}
                  price={Article.price}
                  date_created={Article.date_created}
                />
                <MoveToTopButton />
              </div>
            </div>
            {/* <div className="side-container"></div> */}
          </div>
        )}
      </React.Fragment>
    );
}

export default GetSpecificArticleById;
