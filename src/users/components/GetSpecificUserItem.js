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
      {/* {props.profile} */}
      <div>
      <h4>Articles This User Stared</h4>
        {props.staredArticles.map((v, i) => {
          return <h5>{v.title}</h5>;
        })}
      </div>
      {/* {props.videos} */}
    </li>
  );
};

export default GetSpecificUserItem;
