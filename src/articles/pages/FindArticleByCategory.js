import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import FindArticleByCategoryList from "../components/FindArticleByCategoryList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./FindArticleByCategory.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const FindArticleByCategory = () => {
  const auth = useContext(AuthContext);
  const categories = useParams().categories;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [CategorySortedArticle, setCategorySortedArticle] = useState([]);
  const [CountByCategory, setCountByCategory] = useState();
  const [searchResultInfo, setsearchResultInfo] = useState();

  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getArticlesByCategories = async () => {
      setIsLoading(true);
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/get_article_by_categories/${categories}`
      );
      // console.log(responseData);
      // console.log(responseData.categoryMatchedArticles[0].price);
      // console.log("category based sorting done");
      setCategorySortedArticle(responseData.categoryMatchedArticles);
      // console.log(responseData.countByCategory);
      // console.log("extracting count done");
      // setCountByCategory(responseData.countByCategory);
      const articleCount = responseData.countByCategory;
      let singleOrPlural;
      if (articleCount === 1) {
        singleOrPlural = "article";
      } else {
        singleOrPlural = "articles";
      }
      const result = `${articleCount} ${singleOrPlural} found in '${categories}' category`;
      setsearchResultInfo(result);
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
    };
    getArticlesByCategories();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && CategorySortedArticle && (
        <div>
          {" "}
          <div className="findArticleByCategory-container">
            <div className="main-container">
              <div>
                {/* <h5>{CountByCategory} related articles found.</h5> */}
                <h4>{searchResultInfo}</h4>
                <div>
                  <span>
                    <Link to={`/articles`}>Article Index</Link>
                  </span>
                </div>
                <FindArticleByCategoryList items={CategorySortedArticle} />
                <MoveToTopButton />
              </div>
            </div>
            {/* <div className="side-container"></div> */}
          </div>
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default FindArticleByCategory;
