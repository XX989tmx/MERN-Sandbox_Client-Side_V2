import React from "react";
import StaredArticlesItem from "./StaredArticlesItem";

const StaredArticlesList = (props) => {
  return (
    <div>
      {props.StaredArticles.map((v, i) => (
        <StaredArticlesItem
          id={v.id}
          key={i}
          title={v.title}
          images={v.images}
          referenceSites={v.referenceSites}
          author_name={v.author.name}
          author_email={v.author.email}
          author_image={v.author.image}
          author_id={v.author._id}
          categories={v.categories}
          date_created={v.date_created}
          tags={v.tags}
          price={v.price}
          downloadable={v.downloadable}
          viewCount={v.viewCount}
          comments={v.comments}
          staredBy={v.staredBy}
        />
      ))}
    </div>
  );
};

export default StaredArticlesList;
