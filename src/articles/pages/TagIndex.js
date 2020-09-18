import React, { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import TagIndexList from "../components/TagIndexList";

import "./TagIndex.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const TagIndex = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [TagIndexData, setTagIndexData] = useState([]);

  useEffect(() => {
    const getTagIndex = async (params) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/tagIndex`
        );
        // console.log(responseData);
        setTagIndexData(responseData.responseArray);
        // console.log(responseData.responseArray);
        // console.log(responseData.responseArray[0].tagName);
        // console.log(responseData.responseArray[0].count);
      } catch (error) {}
    };
    getTagIndex();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      <div className="tag-index-container">
        {!isLoading && TagIndexData && (
          <div className="main-container">
            <div>
              <TagIndexList TagIndexData={TagIndexData} />
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

export default TagIndex;
