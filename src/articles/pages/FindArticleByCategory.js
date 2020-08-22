import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import FindArticleByCategoryList from "../components/FindArticleByCategoryList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

import "./FindArticleByCategory.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const FindArticleByCategory = () => {
  const auth = useContext(AuthContext);
  const categories = useParams().categories;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [CategorySortedArticle, setCategorySortedArticle] = useState([]);
  const [CountByCategory, setCountByCategory] = useState();

  useEffect(() => {
    const getArticlesByCategories = async () => {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/get_article_by_categories/${categories}`
      );
      console.log(responseData);
      console.log(responseData.categoryMatchedArticles[0].price);
      console.log("category based sorting done");
      setCategorySortedArticle(responseData.categoryMatchedArticles);
      console.log(responseData.countByCategory);
      console.log("extracting count done");
      setCountByCategory(responseData.countByCategory);
    };
    getArticlesByCategories();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && CategorySortedArticle && (
        <div className="findArticleByCategory-container">
          <div className="main-container">
            <div>
              <h5>{CountByCategory} related articles found.</h5>
              <FindArticleByCategoryList items={CategorySortedArticle} />
              <MoveToTopButton />
            </div>
          </div>
          {/* <div className="side-container"></div> */}
        </div>
      )}
      {!isLoading && CategorySortedArticle && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default FindArticleByCategory;
