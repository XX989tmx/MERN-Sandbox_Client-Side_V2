import React from "react";
import { Link } from "react-router-dom";

import "./TagIndexItem.css";

const TagIndexItem = (props) => {
  return (
    <Link to={`/get_article_by_tags/${props.tagName}`}>
      <li className="list-item">
        <div className="item-area">
          <span>{props.tagName}</span>
          <span class="badge">{props.count}</span>
        </div>
      </li>
    </Link>
  );
};

export default TagIndexItem;
