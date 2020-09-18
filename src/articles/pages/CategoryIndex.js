import React, { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CategoryIndexList from "../components/CategoryIndexList";

import "./CategoryIndex.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const CategoryIndex = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [CategoryIndexData, setCategoryIndexData] = useState([]);

  useEffect(() => {
    const getCategoryIndex = async (params) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/categoryIndex`
        );
        // console.log(responseData);
        setCategoryIndexData(responseData.responseArray);
        // console.log(responseData.responseArray);
        // console.log(responseData.responseArray[0].categoryName);
        // console.log(responseData.responseArray[0].count);
      } catch (error) {}
    };
    getCategoryIndex();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className="category-index-container">
        {!isLoading && CategoryIndexData && (
          <div className="main-container">
            <div>
              <CategoryIndexList CategoryIndexData={CategoryIndexData} />
            </div>
            <div>
              <span>
                <Link to={`/articles`}>Article Index</Link>
              </span>
            </div>
          </div>
        )}
        {/* <div className="side-container"></div> */}
      </div>
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default CategoryIndex;
