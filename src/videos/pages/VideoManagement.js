import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import VideoManagementList from "../components/VideoManagementList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyProfileSideNavigation from "../../users/components/MyProfileSideNavigation";

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
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && MyVideos && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: "20%",
          }}
        >
          {" "}
          <div className="video-management-container">
            <div>
              <h4>Welcome Back {UserName}! Your Videos are all here</h4>
              <p>To Update your Video, Click an Update Button</p>
              <span>
                <Link to={`/videos/main`}>Go Video Index</Link>
              </span>
              <VideoManagementList items={MyVideos} />
              <MoveToTopButton />
            </div>
          </div>
          <div
            style={{ padding: "20px", width: "400px" }}
            className="my-profile-sidebar-area"
          >
            <MyProfileSideNavigation />
          </div>
        </div>
      )}
      {!isLoading && MyVideos && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default VideoManagement;
