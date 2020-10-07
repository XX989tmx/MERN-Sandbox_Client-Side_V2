import React from 'react';
import './ExternalLink.css';

const ExternalLink = (props) => {
    return (
      <span >
        {" "}
        <a href={props.to} className={props.className} target="_blank">
          {props.text}
        </a>
      </span>
    );
}

export default ExternalLink;
