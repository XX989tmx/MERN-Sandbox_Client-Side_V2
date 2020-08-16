import React, { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CategoryIndexList from '../components/CategoryIndexList';

import './CategoryIndex.css';

const CategoryIndex = () => {
const { isLoading, error, sendRequest, clearError } = useHttpClient();
const [CategoryIndexData, setCategoryIndexData] = useState([]);

useEffect(() => {
  const getCategoryIndex = async (params) => {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/articles/categoryIndex`
      );
      console.log(responseData);
      setCategoryIndexData(responseData.responseArray);
      console.log(responseData.responseArray);
      console.log(responseData.responseArray[0].categoryName);
      console.log(responseData.responseArray[0].count);
    } catch (error) {}
  };
  getCategoryIndex();
}, [sendRequest]);

    return (
      <div className="category-index-container">
        <div className="main-container">
          <div>
            <CategoryIndexList CategoryIndexData={CategoryIndexData} />
          </div>
        </div>
        {/* <div className="side-container"></div> */}
      </div>
    );
}

export default CategoryIndex;
