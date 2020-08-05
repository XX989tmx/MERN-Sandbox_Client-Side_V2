import React from "react";
import { Link } from "react-router-dom";

const FindArticleByTagItems = (props) => {
  return (
    <div className="card-box">
      <Link
        to={`/get_specific_article_by_id/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div>
          {/* <h1>
        {props.countByTag} 
        {props.tags} Related articles found.
      </h1> */}
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
            <h4>categories : {props.categories}</h4>
          </Link>
          <Link
            to={`/get_article_by_tags/${props.tags}`}
            style={{ textDecoration: "none" }}
          >
            <h4>tags : {props.tags}</h4>
          </Link>
          <p>{props.date_created}</p>
        </div>
      </Link>
    </div>
  );
};

export default FindArticleByTagItems;
