import React from "react";
import FindArticleByTagItems from "./FindArticleByTagItems";

const FindArticleByTagList = (props) => {
  return (
    <ul className="article-item-list ">
      {props.items.map((item) => (
        <FindArticleByTagItems
          key={item.id}
          id={item.id}
          images={item.images}
          title={item.title}
          contents={item.contents}
          // content={item.content}
          // content2={item.content2}
          // content3={item.content3}
          // content4={item.content4}
          authorName={item.author.name}
          authorId={item.author._id}
          authorEmail={item.author.email}
          tags={item.tags}
          categories={item.categories}
          price={item.price}
          date_created={item.date_created}
          downloadable={item.downloadable}
          wordCount={item.wordCount}
          estimatedReadingTime={item.estimatedReadingTime}
          viewCount={item.viewCount}
          staredBy={item.staredBy}
        />
      ))}
    </ul>
  );
};

export default FindArticleByTagList;
