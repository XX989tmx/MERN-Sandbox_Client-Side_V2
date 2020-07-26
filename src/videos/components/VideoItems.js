import React from 'react';
import { Link } from 'react-router-dom';

const VideoItems = (props) => {
    return (
      <div>
        <Link to={`/videos/${props.id}`}>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <iframe
            src={props.src}
            width="600"
            height="400"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </Link>
        <Link to={`/videos/get_video_by_tags/${props.tags}`}>
          <p>{props.tags}</p>
        </Link>
        <Link to={`/videos/get_video_by_categories/${props.categories}`}>
          <p>{props.categories}</p>
        </Link>
        <p>{props.persons}</p>
        <p>{props.id}</p>
        <p>{props.date_created}</p>
      </div>
    );
}

export default VideoItems;
