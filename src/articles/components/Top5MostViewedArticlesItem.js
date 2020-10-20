import React from "react";
import { Link } from "react-router-dom";
import "./Top5MostViewedArticlesItem.css";

const Top5MostViewedArticlesItem = (props) => {
  return (
    <Link to={`/get_specific_article_by_id/${props.id}`}>
      <li>
        <div className="top5-article-item-container">
          <div className="top5-article-rank-wrapper">
            {" "}
            <span className="top5-article-rank-text">
              {" "}
              Rank {props.index + 1}
            </span>
          </div>
          {/* <img src={props.images[0]}/> */}
          <div className="top5-article-information-wrapper">
            {" "}
            <div>
              {" "}
              <span className="top5-article-title">{props.title}</span>
              <br />
              <div className="center">
                {" "}
                <span className="top5-article-name">{props.author.name}</span>
                <br />
                <span className="top5-article-price">{props.price}</span>
                <span className="top5-article-date">
                  {new Date(props.date_created).toDateString()}
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Top5MostViewedArticlesItem;
