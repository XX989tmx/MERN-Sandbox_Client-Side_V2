import React, { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CategoryIndexList from '../components/CategoryIndexList';

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
      <div>
        <CategoryIndexList CategoryIndexData={CategoryIndexData} />
      </div>
    );
}

export default CategoryIndex;
