import React, { useContext, useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import TagIndexList from "../components/TagIndexList";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./TagIndex.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const TagIndex = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [TagIndexData, setTagIndexData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTagIndex = async (params) => {
      setIsLoading(true);
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/tagIndex`
        );
        // console.log(responseData);
        setTagIndexData(responseData.responseArray);
        function moveToTop(params) {
          window.scrollTo(0, 0);
        }
        moveToTop();
        setIsLoading(false);
        // console.log(responseData.responseArray);
        // console.log(responseData.responseArray[0].tagName);
        // console.log(responseData.responseArray[0].count);
      } catch (error) {}
    };
    getTagIndex();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && TagIndexData && (
        <div>
          {" "}
          <div className="tag-index-container">
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

            {/* <div className="side-container"></div> */}
          </div>
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default TagIndex;
