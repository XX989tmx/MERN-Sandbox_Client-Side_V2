import React from "react";
import FindArticleByCategoryItems from "./FindArticleByCategoryItems";

const FindArticleByCategoryList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <FindArticleByCategoryItems
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          content={item.content}
          authorName={item.author.name}
          authorEmail={item.author.email}
          authorId={item.author._id}
          tags={item.tags}
          price={item.price}
          categories={item.categories}
          date_created={item.date_created}
        />
      ))}
    </ul>
  );
};

export default FindArticleByCategoryList;
