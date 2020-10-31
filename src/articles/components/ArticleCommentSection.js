import React from "react";
import ArticleCommentList from "./ArticleCommentList";

const ArticleCommentSection = (props) => {
  return (
    <div>
      <p>{props.Comments.length} comments</p>
      <ArticleCommentList
        Comments={props.Comments}
        reloadStateHandler={props.reloadStateHandler}
      />
    </div>
  );
};

export default ArticleCommentSection;
