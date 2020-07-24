import React from "react";
import FindArticleByTagItems from "./FindArticleByTagItems";

const FindArticleByTagList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <FindArticleByTagItems
          title={item.title}
          content={item.content}
          tags={item.tags}
          date_created={item.date_created}
        />
      ))}
    </div>
  );
};

export default FindArticleByTagList;
