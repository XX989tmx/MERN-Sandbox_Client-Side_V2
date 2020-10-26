import React from "react";
import FollowingItem from "./FollowingItem";

const FollowingList = (props) => {
  return (
    <div>
      {props.Following.map((v, i) => (
        <FollowingItem
          key={i}
          id={v.id}
          articles={v.articles}
          email={v.email}
          followedBy={v.followedBy}
          following={v.following}
          image={v.image}
          name={v.name}
          staredArticles={v.staredArticles}
        />
      ))}
    </div>
  );
};

export default FollowingList;
