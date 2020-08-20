import React from "react";
import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import './ArticleList.css';

const ArticleList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card style={{ background: "rgb(248,248,248)", textAlign: "center" }}>
          <h2>No Articles Found. Maybe Create One?</h2>
          <Button btnBlack to="/articles/new">Write Article</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="article-item-list ">
      {props.items.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          image={article.image}
          title={article.title}
          content={article.content}
          authorName={article.author.name}
          authorId={article.author._id}
          authorEmail={article.author.email}
          // category={article.category}
          categories={article.categories}
          tags={article.tags}
          date_created={article.date_created}
          price={article.price}
          downloadable={article.downloadable}
          // publishedDate={article.publishedDate}
          onDelete={props.onDeleteArticle}
        />
      ))}
    </ul>
  );
};

export default ArticleList;
