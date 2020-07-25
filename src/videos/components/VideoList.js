import React from "react";
import VideoItems from "./VideoItems";

const VideoList = (props) => {
  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default VideoList;
