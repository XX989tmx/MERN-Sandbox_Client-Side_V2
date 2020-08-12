import React from "react";
import TagIndexItem from "./TagIndexItem";

const TagIndexList = (props) => {
  return (
    <ul>
      {props.TagIndexData.map((d) => (
        <TagIndexItem tagName={d.tagName} count={d.count} />
      ))}
    </ul>
  );
};

export default TagIndexList;
