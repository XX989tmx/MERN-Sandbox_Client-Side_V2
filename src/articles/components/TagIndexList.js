import React from "react";
import TagIndexItem from "./TagIndexItem";
import './tagIndexList.css';

const TagIndexList = (props) => {
  return (
    <ul class="list-group">
      {props.TagIndexData.map((d) => (
        <TagIndexItem tagName={d.tagName} count={d.count} />
      ))}
    </ul>
  );
};

export default TagIndexList;
