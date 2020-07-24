import React from 'react';

const FindArticleByCategoryItems = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <h4>category : {props.categories}</h4>
        <p>{props.date_created}</p>
      </div>
    );
}

export default FindArticleByCategoryItems;
