import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import VideoManagementList from "../components/VideoManagementList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

import "./VideoManagement.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const VideoManagement = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const userId = useParams().userId;
  const [MyVideos, setMyVideos] = useState([]);
  const [UserName, setUserName] = useState();

  useEffect(() => {
    const fetchAllMyVideo = async () => {
      console.log(auth.userId);
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/videos/user/${userId}`
        );

        setMyVideos(responseData.videosWithUser);
        setUserName(responseData.videosWithUser[0].creator.name);
      } catch (err) {}
    };
    fetchAllMyVideo();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <div className="video-main-container">
        <div>
          <h2>Welcome {UserName}! Your Videos is here</h2>
          <VideoManagementList items={MyVideos} />
          <MoveToTopButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoManagement;
