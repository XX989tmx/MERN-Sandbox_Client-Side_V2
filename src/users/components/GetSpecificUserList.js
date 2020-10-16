import React from "react";
import GetSpecificUserItem from "./GetSpecificUserItem";
import './GetSpecificUserList.css';

const GetSpecificUserList = (props) => {
  return (
    <ul>
      {props.UserArray.map((v, i) => (
        <GetSpecificUserItem
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

export default GetSpecificUserList;
