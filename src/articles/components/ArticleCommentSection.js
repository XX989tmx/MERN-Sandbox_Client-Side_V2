import React from "react";
import ArticleCommentList from "./ArticleCommentList";

const ArticleCommentSection = (props) => {
  return (
    <div>
      <p>{props.Comments.length} comments</p>
      <ArticleCommentList Comments={props.Comments} />
    </div>
  );
};

export default ArticleCommentSection;
