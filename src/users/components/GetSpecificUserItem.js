import React from "react";
import { Link } from "react-router-dom";
import './GetSpecificUserItem.css';

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
      <h4>Profile</h4>
      {props.profile ? (
        <div>
          <p>NickName: {props.profile.nickname}</p>
          <p>State:{props.profile.state}</p>
          <p>City: {props.profile.city}</p>
          <p>About Me: {props.profile.introduce_yourself}</p>
          <p>
            Things I Love:{" "}
            <ul>
              {props.profile.things_you_likes.map((v, i) => {
                return <li key={i}>{v}</li>;
              })}
            </ul>
          </p>
          <p>
            {" "}
            Things I Hate:{" "}
            <ul>
              {props.profile.things_you_hates.map((v, i) => {
                return <li key={i}>{v}</li>;
              })}
            </ul>
          </p>
          <p> School: {props.profile.school}</p>
          <p>Company:{props.profile.company}</p>
        </div>
      ) : (
        <div>
          {" "}
          <h5>this user do not have profile information yet</h5>
        </div>
      )}

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
        <h4>{props.followedBy.length} Followers</h4>
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
        <h4>{props.following.length} Following</h4>
        {props.following.map((v, i) => {
          return (
            <a href={`/getSpecificUser/${v.id}`}>
              <h5 key={i}>{v.name}</h5>
            </a>
          );
        })}
      </div>

      <div>
        <h4>Articles This User Stared</h4>
        <h4>{props.staredArticles.length} Stared Articles</h4>
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
