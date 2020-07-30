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
        <Card>
          <h2>No Articles Found. Maybe Create One?</h2>
          <Button to="/articles/new">Write Article</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul>
    
      {props.items.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          image={article.image}
          title={article.title}
          content={article.content}
          author={article.author}
          // category={article.category}
          categories={article.categories}
          tags={article.tags}
          date_created={article.date_created}
          price={article.price}
          // publishedDate={article.publishedDate}
          onDelete={props.onDeleteArticle}
        />
      ))}
      
    </ul> 
  );
};

export default ArticleList;
