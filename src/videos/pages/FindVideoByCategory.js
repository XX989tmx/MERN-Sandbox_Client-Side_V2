import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const FindVideoByCategory = () => {
    const categories = useParams().categories;
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [CategorySortedVideos, setCategorySortedVideos] = useState([]);
    const [CategoryVideoCount, setCategoryVideoCount] = useState();

    useEffect(() => {
      const getVideoByCategories = async (params) => {
        try {
          const responseData = await sendRequest(
            process.env
              .REACT_APP_BACKEND_URL + `/videos/get_video_by_categories/${categories}`
          );
          console.log(responseData);
          setCategorySortedVideos(responseData.categoryMatchedVideos);
          console.log(responseData.categoryMatchedVideos);
          setCategoryVideoCount(responseData.countByCategory);
          console.log(responseData.countByCategory);
        } catch (error) {}
        // window.scrollTo(0, 0);
      };
      getVideoByCategories();
    }, [sendRequest]);

    return (
      <React.Fragment>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && CategorySortedVideos && (
          <div className="container">
            <div className="main-container">
              <div>
                <VideoList items={CategorySortedVideos} />
              </div>
            </div>
            <div className="side-container"></div>
          </div>
        )}
      </React.Fragment>
    );
}

export default FindVideoByCategory;
