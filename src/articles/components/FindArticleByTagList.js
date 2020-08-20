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
          authorName={item.author.name}
          authorId={item.author._id}
          authorEmail={item.author.email}
          tags={item.tags}
          categories={item.categories}
          price={item.price}
          date_created={item.date_created}
          downloadable={item.downloadable}
        />
      ))}
    </ul>
  );
};

export default FindArticleByTagList;
