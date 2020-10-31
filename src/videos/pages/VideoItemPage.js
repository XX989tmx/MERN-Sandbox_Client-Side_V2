import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoPlayerBox from "../components/VideoPlayerBox";
import VideoLinkItemList from "../components/VideoLinkItemList";
import VideoList from "../components/VideoList";
import VideoItems from "../components/VideoItems";
import VideoByIdItem from "../components/VideoByIdItem";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./VideoItemPage.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import RelatedVideosList from "../components/RelatedVideosList";
import Axios from "axios";

const VideoItemPage = () => {
  const videoId = useParams().videoId;
  const [VideoById, setVideoById] = useState({});
  const [VideoCommentsArray, setVideoCommentsArray] = useState([]);
  const [videoTagsArray, setvideoTagsArray] = useState([]);
  const [videoCategoriesArray, setvideoCategoriesArray] = useState([]);
  const [videoPersonsArray, setvideoPersonsArray] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [RelatedVideos, setRelatedVideos] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getVideoById = async (params) => {
      setIsLoading(true);
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/videos/${videoId}`
        );
        console.log(responseData);
        setVideoById(responseData.video);
        setVideoCommentsArray(responseData.video.comments);
        setvideoTagsArray(responseData.video.tags);
        setvideoCategoriesArray(responseData.video.categories);
        setvideoPersonsArray(responseData.video.persons);
        console.log(responseData.video);
        console.log(responseData.video.comments);
        console.log(responseData.video.title);
      } catch (error) {}

      // window.scrollTo(0, 0);
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/videos/get_related_videos/${videoId}`
        );
        const data = response.data;
        console.log(data);
        setRelatedVideos(data.relatedVideosArrayCapped20);
      } catch (error) {
        console.log(error);
      }
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
    };
    getVideoById();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading &&
        VideoById &&
        RelatedVideos && (
          <div>
            <div className="video-item-page-container">
              <div className="video-item-main-section">
                {/* <p>
              個別のビデオ表示のためには2通りの可能性。1videoItem child
              componentに渡して表示、2個別のビデオ表示用のchild
              componentを作り、それに渡す（youtubeの個別表示ページのようなレイアウト）
            </p> */}
                <VideoByIdItem
                  title={VideoById.title}
                  description={VideoById.description}
                  src={VideoById.src}
                  videoTagsArray={videoTagsArray}
                  videoCategoriesArray={videoCategoriesArray}
                  videoPersonsArray={videoPersonsArray}
                  id={VideoById.id}
                  date_created={VideoById.date_created}
                  views={VideoById.views}
                  liked={VideoById.liked}
                  disliked={VideoById.disliked}
                  comments={VideoCommentsArray}
                />

                {/* <VideoList items={VideoById} /> */}
                {/* each video item page. place video player box component & video link item
      List&video link item. */}
                {/* <VideoPlayerBox></VideoPlayerBox>
        
            <VideoLinkItemList></VideoLinkItemList> */}
              </div>
              <div className="video-item-side-bar-section">
                <h4>Related Videos</h4>
                <RelatedVideosList RelatedVideos={RelatedVideos} />
              </div>
              <MoveToTopButton />
            </div>
            <FooterMainNavigation />
          </div>
        )}
    </React.Fragment>
  );
};

export default VideoItemPage;
