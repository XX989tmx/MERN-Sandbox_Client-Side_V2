import React from "react";
import { Link } from "react-router-dom";

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
