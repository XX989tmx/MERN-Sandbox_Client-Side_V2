import React from "react";
import ArticleCommentHistoryOfThisUserItem from "./ArticleCommentHistoryOfThisUserItem";
import './ArticleCommentHistoryOfThisUserList.css';

const ArticleCommentHistoryOfThisUserList = (props) => {
  return (
    <ul className="get-specific-user-list">
      {props.UserArray.map((v, i) => (
        <ArticleCommentHistoryOfThisUserItem
          key={v.id}
          id={v.id}
          articles={v.articles}
          email={v.email}
          followedBy={v.followedBy}
          following={v.following}
          name={v.name}
          image={v.image}
          profile={v.profile}
          staredArticles={v.staredArticles}
          videos={v.videos}
          article_comments={v.article_comments}
        />
      ))}
    </ul>
  );
};

export default ArticleCommentHistoryOfThisUserList;
