import React, { useEffect, useState, useContext } from "react";
import VideoLinkItem from "../components/VideoLinkItem";

import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import { AuthContext } from "../../shared/context/auth-context";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./VideoMainPage.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { Link } from "react-router-dom";
import Auth from "../../users/pages/Auth";

const VideoMainPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [AllVideos, setAllVideos] = useState([]);
  const [videoCount, setVideoCount] = useState();
  const auth = useContext(AuthContext);

  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllVideos = async () => {
      setIsLoading(true);
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/videos/index`
        );

        setAllVideos(responseData.videos);
        console.log(responseData.videos);
        setVideoCount(responseData.count);
        console.log(responseData.count);
      } catch (err) {}
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
    };
    getAllVideos();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && AllVideos && (
        <div>
          {" "}
          <div className="video-main-container">
            <div>
              <span>
                <Link to={`/videos/video_management/${auth.userId}`}>
                  Manage Video
                </Link>
              </span>
              <VideoList items={AllVideos} />
              <MoveToTopButton />
            </div>
          </div>
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default VideoMainPage;
