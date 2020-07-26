import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ArticleItem from "../components/ArticleItem";

const GetSpecificArticleById = () => {
const { isLoading, error, sendRequest, clearError } = useHttpClient();
const articleId = useParams().articleId;
const [Article, setArticle] = useState({});

useEffect(() => {
  const getArticleById = async (params) => {
    try {
      const responseData = await sendRequest(
        `http://localhost:5000/api/articles/get_specific_article_by_id/${articleId}`
      );
      console.log(responseData);
      setArticle(responseData.article);
    } catch (error) {}
  };
  getArticleById();
}, [sendRequest]);


    return (
      <div>
        <ArticleItem
          key={Article.id}
          id={Article.id}
          image={Article.image}
          title={Article.title}
          content={Article.content}
          author={Article.author}
          categories={Article.categories}
          tags={Article.tags}
          date_created={Article.date_created} 
        />
      </div>
    );
}

export default GetSpecificArticleById;
