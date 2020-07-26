import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";

const FindVideoByTags = () => {
const tags = useParams().tags;
const [tagSortedVideos, setTagSortedVideos] = useState([]);
const [videoCount, setVideoCount] = useState();
const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
      const getVideoByTags = async (params) => {
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/api/videos/get_video_by_tags/${tags}`
          );
         console.log(responseData);
         setTagSortedVideos(responseData.tagMatchedVideos);
         console.log(responseData.countByTag);
         setVideoCount(responseData.countByTag);
        } catch (error) {}
      };
      getVideoByTags();
    }, [sendRequest]);

    return (
      <div>
      <p>videoMainPageのlist&itemsコンポーネント再利用。問題起きたらFindVideoByTags用のchild component作り使う</p>
        <VideoList items={tagSortedVideos} />
      </div>
    );
}

export default FindVideoByTags;
