import React, { useContext, useState, useEffect } from "react";

import { useParams, useHistory, Link } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import FindArticleByTagList from "../components/FindArticleByTagList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

import "./FindArticleByTag.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

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
  const [searchResultInfo, setsearchResultInfo] = useState();

  useEffect(() => {
    const getArticlesByTags = async (params) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/articles/get_article_by_tags/${tags}`
        );
        // console.log(responseData);
        // console.log("tag based sorting done.");
        // console.log(responseData.tagMatchedArticles);
        // console.log(responseData.tagMatchedArticles[0].title);
        // console.log(responseData.tagMatchedArticles[0].content);
        setArticleTitle(responseData.tagMatchedArticles[0].title);
        setArticleContent(responseData.tagMatchedArticles[0].content);
        setArticletags(responseData.tagMatchedArticles[0].tags);
        setTagSortedArticle(responseData.tagMatchedArticles);
        // console.log(tagSortedArticle.title);
        const articleCount = responseData.countByTag;
        let singleOrPlural;
        if (articleCount === 1) {
          singleOrPlural = "article";
        } else {
          singleOrPlural = "articles";
        }
        const result = `${articleCount} ${singleOrPlural} found in '${tags}' tag`;
        setsearchResultInfo(result);

        // console.log(responseData.countByTag);
        // setCountByTag(responseData.countByTag);
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
      {!isLoading && tagSortedArticle && (
        <div className="findArticleByTag-container">
          <div className="main-container">
            <div>
              {/* <div>
        <h3>{Articletags}related articles:</h3>
        <h5>{articleTitle}</h5>
        <h6>{ArticleContent}</h6>
      </div> */}
              {/* <h4>{CountByTag} related article found</h4> */}
              <h4>{searchResultInfo}</h4>
              <div>
                <span>
                  <Link to={`/articles`}>Article Index</Link>
                </span>
              </div>
              <FindArticleByTagList items={tagSortedArticle} />
              <MoveToTopButton />
            </div>
          </div>
          {/* <div className="side-container"></div> */}
        </div>
      )}
      {!isLoading && tagSortedArticle && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default FindArticleByTag;
