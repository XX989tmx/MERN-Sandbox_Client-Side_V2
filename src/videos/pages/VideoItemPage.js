import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import VideoPlayerBox from "../components/VideoPlayerBox";
import VideoLinkItemList from "../components/VideoLinkItemList";
import VideoList from "../components/VideoList";

const VideoItemPage = () => {
  const videoId = useParams().videoId;
  const [VideoById, setVideoById] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const getVideoById = async (params) => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/videos/${videoId}`
        );
        console.log(responseData);
            setVideoById(responseData.video);
      } catch (error) {}
    };
    getVideoById();
  }, [sendRequest]);

  return (
    <div>
    <p>個別のビデオ表示のためには2通りの可能性。1videoItem child componentに渡して表示、2個別のビデオ表示用のchild componentを作り、それに渡す（youtubeの個別表示ページのようなレイアウト）</p>
      {/* <VideoList items={VideoById} /> */}
      {/* each video item page. place video player box component & video link item
      List&video link item. */}
      {/* <VideoPlayerBox></VideoPlayerBox>
        
            <VideoLinkItemList></VideoLinkItemList> */}
    </div>
  );
};

export default VideoItemPage;
