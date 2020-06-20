import React from "react";
import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
    if (props.items.length === 0) {
        return <div>
            <h2>No Articles Found. Maybe Create One?</h2>
        </div>
    }

  return (
    <ul>
      {props.items.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          author={article.author}
          publishedDate={article.publishedDate}
        />
      ))}
    </ul>
  );
};

export default ArticleList;
