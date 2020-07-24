import React from "react";

const FindArticleByTagItems = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <h4>tags : {props.tags}</h4>
      <p>{props.date_created}</p>
    </div>
  );
};

export default FindArticleByTagItems;
