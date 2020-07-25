import React from 'react';

const VideoByIdItem = (props) => {
    return (
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
      </div>
    );
}

export default VideoByIdItem;
