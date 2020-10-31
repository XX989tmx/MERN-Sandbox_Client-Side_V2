import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./FindVideoByCategory.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const FindVideoByCategory = () => {
  const categories = useParams().categories;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [CategorySortedVideos, setCategorySortedVideos] = useState([]);
  const [CategoryVideoCount, setCategoryVideoCount] = useState();

  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideoByCategories = async (params) => {
      setIsLoading(true);
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/videos/get_video_by_categories/${categories}`
        );
        console.log(responseData);
        setCategorySortedVideos(responseData.categoryMatchedVideos);
        console.log(responseData.categoryMatchedVideos);
        setCategoryVideoCount(responseData.countByCategory);
        console.log(responseData.countByCategory);
      } catch (error) {}
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
      // window.scrollTo(0, 0);
    };
    getVideoByCategories();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && CategorySortedVideos && (
        <div>
          {" "}
          <div className="findVideoByCategory-container">
            {/* <div className="main-container"> */}
            <div>
              <VideoList items={CategorySortedVideos} />
            </div>
            {/* </div> */}
            {/* <div className="side-container"></div> */}
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default FindVideoByCategory;
