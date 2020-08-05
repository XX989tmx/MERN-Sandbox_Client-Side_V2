import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const FindVideoByTags = () => {
const tags = useParams().tags;
const [tagSortedVideos, setTagSortedVideos] = useState([]);
const [videoCount, setVideoCount] = useState();
const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
      const getVideoByTags = async (params) => {
        try {
          const responseData = await sendRequest(
            process.env
              .REACT_APP_BACKEND_URL + `/videos/get_video_by_tags/${tags}`
          );
         console.log(responseData);
         setTagSortedVideos(responseData.tagMatchedVideos);
         console.log(responseData.countByTag);
         setVideoCount(responseData.countByTag);
        } catch (error) {}
        // window.scrollTo(0, 0);
      };
      getVideoByTags();
    }, [sendRequest]);

    return (
      <React.Fragment>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && tagSortedVideos && <div className="container">
          <div className="main-container">
            <div>
              <p>
                videoMainPageのlist&itemsコンポーネント再利用。問題起きたらFindVideoByTags用のchild
                component作り使う
              </p>
              <VideoList items={tagSortedVideos} />
            </div>
          </div>
          <div className="side-container"></div>
        </div>}
      </React.Fragment>
    );
}

export default FindVideoByTags;
