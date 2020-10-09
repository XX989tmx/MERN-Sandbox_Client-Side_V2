import React from "react";
import RelatedVideosItem from "./RelatedVideosItem";

const RelatedVideosList = (props) => {
  return (
    <ul>
      {props.RelatedVideos.map((v, i) => (
        <RelatedVideosItem
          key={v.id}
          id={v.id}
          title={v.title}
          description={v.description}
          duration={v.duration}
          date_created={v.date_created}
          hd={v.hd}
          is4k={v.is4k}
          image={v.image}
        />
      ))}
    </ul>
  );
};

export default RelatedVideosList;
