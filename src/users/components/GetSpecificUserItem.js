import React from "react";
import { Link } from "react-router-dom";

const GetSpecificUserItem = (props) => {
  return (
    <li>
      {props.id}
      <h3>{props.name}</h3>
      <img
        src={props.image}
        alt=""
        style={{ width: "100px", height: "100px" }}
      />
      {props.email}

      <div>
        <h4>{props.name}'s Articles</h4>
        {props.articles.map((v, i) => {
          return (
            <Link to={`/get_specific_article_by_id/${v.id}`}>
              {" "}
              <h5 key={i}>{v.title}</h5>
            </Link>
          );
        })}
      </div>

      <div>
        <h4>People Following This User(Followers)</h4>
        {props.followedBy.map((v, i) => {
          return (
            <a href={`/getSpecificUser/${v.id}`}>
              <h5 key={i}>{v.name}</h5>
            </a>
          );
        })}
      </div>
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

      {/* {props.profile} */}
      <div>
        <h4>Articles This User Stared</h4>
        {props.staredArticles.map((v, i) => {
          return (
            <Link to={`/get_specific_article_by_id/${v.id}`}>
              <h5 key={i}>{v.title}</h5>
            </Link>
          );
        })}
      </div>
      {/* {props.videos} */}
    </li>
  );
};

export default GetSpecificUserItem;
