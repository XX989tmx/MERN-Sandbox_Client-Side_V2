import React from "react";
import ArticleCommentItem from "./ArticleCommentItem";

const ArticleCommentList = (props) => {
  return (
    <div>
      {props.Comments.map((v, i) => (
        <ArticleCommentItem
          key={i}
          id={v.id}
          user={v.user}
          article={v.article}
          comment={v.comment}
          createdAt={v.createdAt}
        />
      ))}
    </div>
  );
};

export default ArticleCommentList;
