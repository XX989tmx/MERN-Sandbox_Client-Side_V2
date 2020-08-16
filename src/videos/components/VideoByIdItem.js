import React from 'react';

import './VideoByIdItem.css';

const VideoByIdItem = (props) => {
    return (
      <div>
        <iframe
          src={props.src}
          width="100%"
          height="900px"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <span className="videoById-tag">{props.tags}</span>

        <span className="videoById-category">{props.categories}</span>

        <span className="videoById-persons">{props.persons}</span>
        {/* <p>{props.id}</p> */}
        <p>{props.date_created}</p>
      </div>
    );
}

export default VideoByIdItem;
