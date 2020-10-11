import React from "react";
import VideoItems from "./VideoItems";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./VideoList.css";

const VideoList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card style={{ background: "rgb(248,248,248)", textAlign: "center" }}>
          <h2>No Videos Found. Maybe Create One?</h2>
          <Button btnBlack to="/articles/new">
            Input Video Information
          </Button>
        </Card>
      </div>
    );
  }

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
          hd={video.hd}
          is4k={video.is4k}
          image={video.image}
        />
      ))}
    </ul>
  );
};

export default VideoList;
