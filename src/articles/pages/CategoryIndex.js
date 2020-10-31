import React, { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CategoryIndexList from "../components/CategoryIndexList";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./CategoryIndex.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { findAllByDisplayValue } from "@testing-library/react";

const CategoryIndex = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [CategoryIndexData, setCategoryIndexData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCategoryIndex = async (params) => {
      setIsLoading(true);
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
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
    };
    getCategoryIndex();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}

      {!IsLoading && CategoryIndexData && (
        <div>
          {" "}
          <div className="category-index-container">
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

            {/* <div className="side-container"></div> */}
          </div>
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default CategoryIndex;
