import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItems = (props) => {
    return (
      <Link to={`/get_article_by_categories/${props.categoryName}`}>
        <li>
          <div>
            {props.categoryName}
            <span class="badge">{props.count}</span>
          </div>
        </li>
      </Link>
    );
}

export default CategoryIndexItems;
