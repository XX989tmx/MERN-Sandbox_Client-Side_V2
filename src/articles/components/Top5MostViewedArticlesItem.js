import React from "react";

const Top5MostViewedArticlesItem = (props) => {
  return (
    <li>
      <div>
        <span> Rank {props.index + 1}</span>
        {/* <img src={props.images[0]}/> */}
        {props.title}
        {props.author.name}
        {props.price}
      </div>
    </li>
  );
};

export default Top5MostViewedArticlesItem;
