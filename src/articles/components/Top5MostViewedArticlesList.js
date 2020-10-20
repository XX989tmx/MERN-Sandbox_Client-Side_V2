import React from 'react';
import Top5MostViewedArticlesItem from './Top5MostViewedArticlesItem';
import './Top5MostViewedArticlesList.css';

const Top5MostViewedArticlesList = (props) => {
    return (
      <ul className="top5-most-viewed-article-list">
        {props.Top5MostViewedArticles.map((v, i) => (
          <Top5MostViewedArticlesItem
            key={v.id}
            id={v.id}
            index={i}
            title={v.title}
            images={v.images}
            categories={v.categories}
            tags={v.tags}
            downloadable={v.downloadable}
            viewCount={v.viewCount}
            author={v.author}
            price={v.price}
          />
        ))}
      </ul>
    );
}

export default Top5MostViewedArticlesList;
