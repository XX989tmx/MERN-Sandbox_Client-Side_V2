import React from 'react';
import { Link } from 'react-router-dom';

const VideoItems = (props) => {
    return (
    <Link to={`/videos/${props.id}`}>
      <div>
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
        <p>{props.tags}</p>
        <p>{props.categories}</p>
        <p>{props.persons}</p>
        <p>{props.id}</p>
        <p>{props.date_created}</p>
      </div></Link>
    );
}

export default VideoItems;
