import React from 'react';
import { Link } from 'react-router-dom';

const TagIndexItem = (props) => {
    return (
      <Link to={`/get_article_by_tags/${props.tagName}`}>
        <li>
          {props.tagName}
          <span class="badge">{props.count}</span>
        </li>
      </Link>
    );
}

export default TagIndexItem;
