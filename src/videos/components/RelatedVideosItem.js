import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideosItem = (props) => {
    return (
      //   <Link to={`/videos/${props.id}`}>
      <a href={`/videos/${props.id}`}>
        <li>
          <img style={{ width: "150px", height: "90px" }} src={props.image} />
          {props.title}
          {props.duration}
          {props.date_created}
          {props.hd}
          {props.is4k}
        </li>
      </a>
      //   </Link>
    );
}

export default RelatedVideosItem;
