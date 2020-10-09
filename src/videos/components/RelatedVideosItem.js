import React from "react";
import { Link } from "react-router-dom";
import "./RelatedVideosItem.css";

const RelatedVideosItem = (props) => {
  return (
    //   <Link to={`/videos/${props.id}`}>
    <a href={`/videos/${props.id}`}>
      <li className="related-videos-item">
        <div className="related-videos-item-image-area">
          <img className="related-videos-item-image" src={props.image} />
        </div>
        <div className="related-videos-item-caption-area">
          {" "}
          <span className="related-video-item-title">{props.title}</span>
          <br />
          {props.duration} <br/>
          {/* {props.date_created} */}
          <span className="video-item-date">
            updated at {new Date(props.date_created).toDateString()}
          </span>
          {props.hd}
          {props.is4k}
        </div>
      </li>
    </a>
    //   </Link>
  );
};

export default RelatedVideosItem;
