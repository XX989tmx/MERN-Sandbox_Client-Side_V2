import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import FindArticleByCategoryList from "../components/FindArticleByCategoryList";

const FindArticleByCategory = () => {
    const auth = useContext(AuthContext);
    const categories = useParams().categories;
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [CategorySortedArticle, setCategorySortedArticle] = useState([]);

    useEffect(() => {
      const getArticlesByCategories = async () => {
        const responseData = await sendRequest(
          `http://localhost:5000/api/articles/get_article_by_categories/${categories}`
        );
        console.log(responseData);
        console.log('category based sorting done');
        setCategorySortedArticle(responseData.categoryMatchedArticles);
      };
      getArticlesByCategories();
    }, [sendRequest]);


    return (
      <div>
        <FindArticleByCategoryList items={CategorySortedArticle} />
      </div>
    );
}

export default FindArticleByCategory;
