import React from "react";
import FindArticleByTagItems from "./FindArticleByTagItems";

const FindArticleByTagList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <FindArticleByTagItems
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          content={item.content}
          author={item.author}
          tags={item.tags}
          categories={item.categories}
          price={item.price}
          date_created={item.date_created}
        />
      ))}
    </ul>
  );
};

export default FindArticleByTagList;
