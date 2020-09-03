import React from "react";
import VideoManagementItems from "./VideoManagementItems";

import "./VideoManagementList.css";

const VideoManagementList = (props) => {
  return (
    <ul className="video-list">
      {props.items.map((v) => (
        <VideoManagementItems
          key={v.id}
          id={v.id}
          title={v.title}
          description={v.description}
          persons={v.persons}
          src={v.src}
          tags={v.tags}
          categories={v.categories}
          date_created={v.date_created}
          duration={v.duration}
          hd={v.hd}
          is4k={v.is4k}
          image={v.image}
        />
      ))}
    </ul>
  );
};

export default VideoManagementList;
