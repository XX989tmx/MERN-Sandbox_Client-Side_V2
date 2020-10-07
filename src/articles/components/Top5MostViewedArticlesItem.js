import React from "react";
import { Link } from "react-router-dom";

const Top5MostViewedArticlesItem = (props) => {
  return (
    <Link to={`/get_specific_article_by_id/${props.id}`}>
      <li>
        <div>
          <span> Rank {props.index + 1}</span>
          {/* <img src={props.images[0]}/> */}
          {props.title}
          {props.author.name}
          {props.price}
        </div>
      </li>
    </Link>
  );
};

export default Top5MostViewedArticlesItem;
