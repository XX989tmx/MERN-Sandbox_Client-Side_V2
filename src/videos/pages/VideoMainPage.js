import React, { useEffect, useState, useContext } from "react";
import VideoLinkItem from "../components/VideoLinkItem";

import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import { AuthContext } from "../../shared/context/auth-context";

import "./VideoMainPage.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { Link } from "react-router-dom";
import Auth from "../../users/pages/Auth";

const VideoMainPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [AllVideos, setAllVideos] = useState([]);
  const [videoCount, setVideoCount] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/videos/index`
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
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && AllVideos && (
        <div className="video-main-container">
          <div>
            list every Video link items here
            <span>
              <Link to={`/videos/video_management/${auth.userId}`}>
                Manage Video
              </Link>
            </span>
            <VideoList items={AllVideos} />
            <MoveToTopButton />
          </div>
        </div>
      )}
      {!isLoading && AllVideos && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default VideoMainPage;
