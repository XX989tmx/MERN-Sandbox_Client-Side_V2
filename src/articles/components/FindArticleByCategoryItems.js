import React from "react";
import { Link } from "react-router-dom";

const FindArticleByCategoryItems = (props) => {
  return (
    <div className="card-box">
      <Link
        to={`/get_specific_article_by_id/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div>
          <p>{props.id}</p>
          <img
            src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
            style={{ width: "300px", height: "230px" }}
          />
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <p>{props.author}</p>
          <Link
            to={`/get_article_by_categories/${props.categories}`}
            style={{ textDecoration: "none" }}
          >
            <div><p className="categoryArea">Category : {props.categories}</p></div>
          </Link>
          <Link
            to={`/get_article_by_tags/${props.tags}`}
            style={{ textDecoration: "none" }}
          >
            <div><p className="tag-area">Tags: {props.tags}</p></div>
          </Link>
          <p>{props.date_created}</p>
        </div>
      </Link>
    </div>
  );
};

export default FindArticleByCategoryItems;
