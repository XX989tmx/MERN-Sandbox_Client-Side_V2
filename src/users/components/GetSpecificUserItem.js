import React from "react";

const GetSpecificUserItem = (props) => {
  return (
    <li>
      {props.id}
      {/* {props.articles} */}
      {props.email}
      {/* {props.followedBy} */}
      {/* {props.following} */}
      {props.name}
      {props.image}
      {props.profile}
      {/* {props.staredArticles} */}
      {/* {props.videos} */}
    </li>
  );
};

export default GetSpecificUserItem;
