import React from "react";
import { Link } from "react-router-dom";

import "./VideoItems.css";

const VideoItems = (props) => {
  return (
    <li className="video-item-container">
      <Link to={`/videos/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="video-image-box">
          <img
            // src="https://storage.googleapis.com/sample_test_image_bucket/images/2020-06-10%20147.jpg"
            src={props.image}
            alt=""
            style={{ width: "220px", height: "125px" }}
          />
          {props.hd && <span className="hd">HD</span>}
          {props.is4k && <span className="is4K">4K</span>}
          <span className="duration">{props.duration}</span>
        </div>
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>

          <span className="videoItem-persons">{props.persons}</span>
          <span className="video-item-date">
            {new Date(props.date_created).toDateString()}
          </span>
        </div>
        {/* <iframe
            src={props.src}
            width="600"
            height="400"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe> */}
      </Link>
      <Link
        to={`/videos/get_video_by_tags/${props.tags}`}
        style={{ textDecoration: "none" }}
      >
        <span className="video-item-tags">{props.tags}</span>
      </Link>
      <Link
        to={`/videos/get_video_by_categories/${props.categories}`}
        style={{ textDecoration: "none" }}
      >
        <span className="video-item-category">{props.categories}</span>
      </Link>

      {/* <p>{props.id}</p> */}
    </li>
  );
};

export default VideoItems;
