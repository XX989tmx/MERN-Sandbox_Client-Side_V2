import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import "./GetSpecificUserItem.css";

const GetSpecificUserItem = (props) => {
  return (
    <li>
      {/* {props.id} */}

      <div className="user-profile-image-name-follow-related-info-container">
        <div className="profile-image-container">
          <div className="profile-image-area">
            <img className="user-profile-image" src={props.image} alt="" />
          </div>
        </div>

        <div className="profile-name-area">
          <div className="profile-name-wrapper">
            <p> {props.name}</p>
            {/* <p>{props.email}</p> */}
          </div>
        </div>

        <div className="followers-following-information-container">
          <div className="followers-left-box">
            <div className="followers-text-container center">
              <span className="followers-text ">Followers</span>
            </div>
            <div className="followers-count-container  center">
              <span className="followers-count">{props.followedBy.length}</span>
            </div>
          </div>
          <div className="following-right-box">
            <div className="following-text-container  center">
              <span className="following-text">Following</span>
            </div>
            <div className="following-count-container  center">
              <span className="following-count">{props.following.length}</span>
            </div>
          </div>
        </div>

        <div className="follow-button-area">
          <div className="follow-button-container center">
            <button className="follow-button">Follow</button>
          </div>
        </div>
      </div>

      <div className="profile-profile-information-area">
        {props.profile ? (
          <div>
            {" "}
            <div className="profile-header-container center">
              <p className=" profile-header">Profile</p>
            </div>
            <div className="profile-list-container">
              <ul>
                <li>NickName: {props.profile.nickname}</li>
                <li>State:{props.profile.state}</li>
                <li>City: {props.profile.city}</li>
                <li>About Me: {props.profile.introduce_yourself}</li>
                <li>
                  Things I Love:{" "}
                  <ul className="no-list-style">
                    {props.profile.things_you_likes.map((v, i) => {
                      return <li key={i}>{v}</li>;
                    })}
                  </ul>
                </li>
                <li>
                  Things I Hate:{" "}
                  <ul className="no-list-style">
                    {props.profile.things_you_hates.map((v, i) => {
                      return <li key={i}>{v}</li>;
                    })}
                  </ul>
                </li>
                <li>School: {props.profile.school}</li>
                <li>Company:{props.profile.company}</li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <h5>this user do not have profile information yet</h5>
          </div>
        )}
      </div>

      <div>
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
