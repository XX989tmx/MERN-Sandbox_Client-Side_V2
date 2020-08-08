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

const VideoItemPage = () => {
  const videoId = useParams().videoId;
  const [VideoById, setVideoById] = useState({});
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const getVideoById = async (params) => {
      try {
        const responseData = await sendRequest(
          process.env
            .REACT_APP_BACKEND_URL + `/videos/${videoId}`
        );
        console.log(responseData);
            setVideoById(responseData.video);
            console.log(responseData.video);
            console.log(responseData.video.title);
      } catch (error) {}
      // window.scrollTo(0, 0);
    };
    getVideoById();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && VideoById && <div className="container">
        <div className="main-container">
          <div>
            <p>
              個別のビデオ表示のためには2通りの可能性。1videoItem child
              componentに渡して表示、2個別のビデオ表示用のchild
              componentを作り、それに渡す（youtubeの個別表示ページのようなレイアウト）
            </p>
            <VideoByIdItem
              title={VideoById.title}
              description={VideoById.description}
              src={VideoById.src}
              tags={VideoById.tags}
              categories={VideoById.categories}
              persons={VideoById.persons}
              id={VideoById.id}
              date_created={VideoById.date_created}
            />
            <MoveToTopButton />

            {/* <VideoList items={VideoById} /> */}
            {/* each video item page. place video player box component & video link item
      List&video link item. */}
            {/* <VideoPlayerBox></VideoPlayerBox>
        
            <VideoLinkItemList></VideoLinkItemList> */}
          </div>
        </div>
        <div className="side-container"></div>
      </div>}
    </React.Fragment>
  );
};

export default VideoItemPage;
