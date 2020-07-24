import React from "react";
import FindArticleByCategoryItems from "./FindArticleByCategoryItems";

const FindArticleByCategoryList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <FindArticleByCategoryItems
          title={item.title}
          content={item.content}
          categories={item.categories}
          date_created={item.date_created}
        />
      ))}
    </div>
  );
};

export default FindArticleByCategoryList;
