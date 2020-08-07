import React from "react";
import FindArticleByCategoryItems from "./FindArticleByCategoryItems";

const FindArticleByCategoryList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <FindArticleByCategoryItems
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          content={item.content}
          author={item.author}
          tags={item.tags}
          price={item.price}
          categories={item.categories}
          date_created={item.date_created}
        />
      ))}
    </div>
  );
};

export default FindArticleByCategoryList;
