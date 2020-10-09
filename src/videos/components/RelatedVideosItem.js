import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedVideosItem.css';

const RelatedVideosItem = (props) => {
    return (
      //   <Link to={`/videos/${props.id}`}>
      <a href={`/videos/${props.id}`}>
        <li className="related-videos-item">
          <img className="related-videos-item-image" src={props.image} />
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
