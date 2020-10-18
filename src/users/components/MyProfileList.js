import React from "react";
import MyProfileItem from "./MyProfileItem";

const MyProfileList = (props) => {
  return (
    <ul className="get-specific-user-list">
      {props.UserArray.map((v, i) => (
        <MyProfileItem
          key={v.id}
          id={v.id}
          articles={v.articles}
          email={v.email}
          followedBy={v.followedBy}
          following={v.following}
          name={v.name}
          image={v.image}
          profile={v.profile}
          staredArticles={v.staredArticles}
          videos={v.videos}
        />
      ))}
    </ul>
  );
};

export default MyProfileList;
