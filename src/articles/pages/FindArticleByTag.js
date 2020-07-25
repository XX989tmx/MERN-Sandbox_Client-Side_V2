import React, { useContext, useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import FindArticleByTagList from "../components/FindArticleByTagList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const FindArticleByTag = () => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;
  const tags = useParams().tags;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [tagSortedArticle, setTagSortedArticle] = useState([]);
  const [articleTitle, setArticleTitle] = useState();
  const [ArticleContent, setArticleContent] = useState();
  const [Articletags, setArticletags] = useState();
  const [CountByTag, setCountByTag] = useState();

  useEffect(() => {
    const getArticlesByTags = async (params) => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/articles/get_article_by_tags/${tags}`
        );
        console.log(responseData);
        console.log("tag based sorting done.");
        console.log(responseData.tagMatchedArticles);
        console.log(responseData.tagMatchedArticles[0].title);
        console.log(responseData.tagMatchedArticles[0].content);
        setArticleTitle(responseData.tagMatchedArticles[0].title);
        setArticleContent(responseData.tagMatchedArticles[0].content);
        setArticletags(responseData.tagMatchedArticles[0].tags);
        setTagSortedArticle(responseData.tagMatchedArticles);
        console.log(tagSortedArticle.title);

        console.log(responseData.countByTag);
        setCountByTag(responseData.countByTag);
      } catch (error) {}
    };
    getArticlesByTags();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && tagSortedArticle &&<div>
        {/* <div>
        <h3>{Articletags}related articles:</h3>
        <h5>{articleTitle}</h5>
        <h6>{ArticleContent}</h6>
      </div> */}
        <h4>{CountByTag} related article found</h4>
        <FindArticleByTagList items={tagSortedArticle} />
      </div>}
    </React.Fragment>
  );
};

export default FindArticleByTag;
