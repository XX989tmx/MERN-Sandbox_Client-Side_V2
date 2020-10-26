import React from "react";

const FollowingItem = (props) => {
  return (
    <div>
      {props.name}
      {props.email}
      <img style={{ width: "50px", height: "50px" }} src={props.image} alt="" />
    </div>
  );
};

export default FollowingItem;
