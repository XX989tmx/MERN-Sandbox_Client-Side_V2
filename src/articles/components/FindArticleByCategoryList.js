import React from "react";
import FindArticleByCategoryItems from "./FindArticleByCategoryItems";

const FindArticleByCategoryList = (props) => {
  return (
    <ul className="article-item-list ">
      {props.items.map((item) => (
        <FindArticleByCategoryItems
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          contents={item.contents}
          // content={item.content}
          // content2={item.content2}
          // content3={item.content3}
          // content4={item.content4}
          authorName={item.author.name}
          authorEmail={item.author.email}
          authorId={item.author._id}
          tags={item.tags}
          price={item.price}
          categories={item.categories}
          date_created={item.date_created}
          downloadable={item.downloadable}
        />
      ))}
    </ul>
  );
};

export default FindArticleByCategoryList;
