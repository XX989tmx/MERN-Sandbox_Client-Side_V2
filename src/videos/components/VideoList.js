import React from "react";
import VideoItems from "./VideoItems";

import './VideoList.css';

const VideoList = (props) => {
  return (
    <ul className="video-list">
      {props.items.map((video) => (
        <VideoItems
          key={video.id}
          id={video.id}
          title={video.title}
          description={video.description}
          persons={video.persons}
          src={video.src}
          tags={video.tags}
          categories={video.categories}
          date_created={video.date_created}
          duration={video.duration}
        />
      ))}
    </ul>
  );
};

export default VideoList;
