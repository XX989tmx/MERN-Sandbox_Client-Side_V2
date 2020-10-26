import React from "react";
import Card from "../../shared/components/UIElements/Card";
import StaredArticlesItem from "./StaredArticlesItem";

const StaredArticlesList = (props) => {
  if (props.StaredArticles.length === 0) {
    return (
      <div>
        <Card style={{ width: "300px", textAlign: "center", margin: "auto" }}>
          <h2>No Stared Articles Found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {props.StaredArticles.map((v, i) => (
        <StaredArticlesItem
          id={v.id}
          key={i}
          title={v.title}
          contents={v.contents}
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
          wordCount={v.wordCount}
          estimatedReadingTime={v.estimatedReadingTime}
        />
      ))}
    </div>
  );
};

export default StaredArticlesList;
