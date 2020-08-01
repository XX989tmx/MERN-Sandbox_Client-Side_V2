import React from "react";
import { Link } from "react-router-dom";

const FindArticleByCategoryItems = (props) => {
  return (
    <div>
      <Link to={`/get_specific_article_by_id/${props.id}`}>
        <div>
          <p>{props.id}</p>
          <img
            src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
            style={{ width: "300px", height: "230px" }}
          />
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <p>{props.author}</p>
          <Link to={`/get_article_by_categories/${props.categories}`}>
            <h4>category : {props.categories}</h4>
          </Link>
          <Link to={`/get_article_by_tags/${props.tags}`}>
            <h4>tags: {props.tags}</h4>
          </Link>
          <p>{props.date_created}</p>
        </div>
      </Link>
    </div>
  );
};

export default FindArticleByCategoryItems;
