import React from 'react';
import { Link } from "react-router-dom";
import './VideoByIdItem.css';

const VideoByIdItem = (props) => {
    return (
      <div>
        <iframe
          src={props.src}
          width="1082px"
          height="610px"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link
          to={`/videos/get_video_by_tags/${props.tags}`}
          style={{ textDecoration: "none" }}
        >
          <span className="videoById-tag">{props.tags}</span>
        </Link>

        <Link
          to={`/videos/get_video_by_categories/${props.categories}`}
          style={{ textDecoration: "none" }}
        >
          <span className="videoById-category">{props.categories}</span>
        </Link>

        <span className="videoById-persons">{props.persons}</span>
        {/* <p>{props.id}</p> */}
        <p>{props.date_created}</p>
      </div>
    );
}

export default VideoByIdItem;
