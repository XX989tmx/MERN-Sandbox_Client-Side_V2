import React from "react";
import { Link } from "react-router-dom";

const GetSpecificUserItem = (props) => {
  return (
    <li>
      {props.id}
      {/* {props.articles} */}
      {props.email}
      {/* {props.followedBy} */}
      <div>
        <h4>People This User Is Following(Following)</h4>
        {props.following.map((v, i) => {
          return (
            <a href={`/getSpecificUser/${v.id}`}>
              <h5 key={i}>{v.name}</h5>
            </a>
          );
        })}
      </div>
      {props.name}
      {props.image}
      {/* {props.profile} */}
      <div>
        <h4>Articles This User Stared</h4>
        {props.staredArticles.map((v, i) => {
          return (
            <Link to={`/get_specific_article_by_id/${v.id}`}>
              <h5>{v.title}</h5>
            </Link>
          );
        })}
      </div>
      {/* {props.videos} */}
    </li>
  );
};

export default GetSpecificUserItem;
