import React, { useEffect, useState } from "react";
import VideoLinkItem from '../components/VideoLinkItem';

import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";

const VideoMainPage = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [AllVideos, setAllVideos] = useState([]);
    const [videoCount, setVideoCount] = useState();

    useEffect(() => {
      const getAllVideos = async () => {
        try {
          const responseData = await sendRequest(
            process.env
              .REACT_APP_BACKEND_URL + `/videos/index`
          );

          setAllVideos(responseData.videos);
          console.log(responseData.videos);
          setVideoCount(responseData.count);
          console.log(responseData.count);
        } catch (err) {}
      };
      getAllVideos();
    }, [sendRequest]);


    return (
      <div>
        list every Video link items here
        <VideoList items={AllVideos} />
      </div>
    );
}

export default VideoMainPage;
