import React from "react";
import { Link } from "react-router-dom";
import './GetSpecificUserItem.css';

const GetSpecificUserItem = (props) => {
  return (
    <li>
      {/* {props.id} */}

      <div className="profile-image-area">
        <img
          src={props.image}
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      <div className="profile-name-etc-area">
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>

      <div className="profile-profile-information-area">
        <h4>Profile</h4>
        {props.profile ? (
          <div>
            <p>NickName: {props.profile.nickname}</p>
            <p>State:{props.profile.state}</p>
            <p>City: {props.profile.city}</p>
            <p>About Me: {props.profile.introduce_yourself}</p>
            <p>
              Things I Love:{" "}
              <ul className="no-list-style">
                {props.profile.things_you_likes.map((v, i) => {
                  return <li key={i}>{v}</li>;
                })}
              </ul>
            </p>
            <p>
              {" "}
              Things I Hate:{" "}
              <ul className="no-list-style">
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
      </div>

      <div className="profile-specific-users-articles-list-area">
        <h4>{props.name}'s Articles</h4>
        <ul className="no-list-style">
          {props.articles.map((v, i) => {
            return (
              <li>
                {" "}
                <Link to={`/get_specific_article_by_id/${v.id}`}>
                  {" "}
                  <h5 key={i}>{v.title}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="profile-followers-list-area">
        <h4>People Following This User(Followers)</h4>
        <h4>{props.followedBy.length} Followers</h4>
        <ul className="no-list-style">
          {" "}
          {props.followedBy.map((v, i) => {
            return (
              <li>
                {" "}
                <a href={`/getSpecificUser/${v.id}`}>
                  <h5 key={i}>{v.name}</h5>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="profile-following-list-area">
        <h4>People This User Is Following(Following)</h4>
        <h4>{props.following.length} Following</h4>
        <ul className="no-list-style">
          {" "}
          {props.following.map((v, i) => {
            return (
              <li>
                {" "}
                <a href={`/getSpecificUser/${v.id}`}>
                  <h5 key={i}>{v.name}</h5>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="profile-specific-users-stared-articles-list-area">
        <h4>Articles This User Stared</h4>
        <h4>{props.staredArticles.length} Stared Articles</h4>
        <ul className="no-list-style">
          {" "}
          {props.staredArticles.map((v, i) => {
            return (
              <li>
                {" "}
                <Link to={`/get_specific_article_by_id/${v.id}`}>
                  <h5 key={i}>{v.title}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* {props.videos} */}
    </li>
  );
};

export default GetSpecificUserItem;
