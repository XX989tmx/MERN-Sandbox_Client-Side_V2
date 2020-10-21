import Axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import "./GetSpecificUserItem.css";

const GetSpecificUserItem = (props) => {
  const auth = useContext(AuthContext);

  const followUser = async (event) => {
    event.preventDefault();
    let followingCandidateId = props.id;
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users/followOtherUser/${auth.userId}/${followingCandidateId}`
      );
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    base: { padding: "10px", fontSize: "15px", lineHeight: "20px" },
    heading: { fontSize: "16px", lineHeight: "20px" },
    boxShadow: { boxShadow: "1px 1px 7px grey" },
  };

  if (!props.profile) {
    styles.heading.color = "#DE3029";
  }

  return (
    <li style={styles.base}>
      {/* {props.id} */}
      <div className="specific-user-upper-section">
        <div
          style={styles.boxShadow}
          className="user-profile-image-name-follow-related-info-container"
        >
          <div className="profile-image-container">
            <div className="profile-image-area">
              <img
                style={styles.boxShadow}
                className="user-profile-image"
                src={props.image}
                alt=""
              />
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
                <span className="followers-count">
                  {props.followedBy.length}
                </span>
              </div>
            </div>
            <div className="following-right-box">
              <div className="following-text-container  center">
                <span className="following-text">Following</span>
              </div>
              <div className="following-count-container  center">
                <span className="following-count">
                  {props.following.length}
                </span>
              </div>
            </div>
          </div>

          <div className="follow-button-area">
            <div className="follow-button-container center">
              <button className="follow-button" onClick={followUser}>
                Follow
              </button>
            </div>
          </div>
        </div>

        <div
          style={styles.boxShadow}
          className="profile-profile-information-area-container"
        >
          <div className="profile-profile-information-area">
            {props.profile ? (
              <div>
                {" "}
                <div className="profile-header-container center">
                  <p className=" profile-header">Profile</p>
                </div>
                <div className="profile-list-container">
                  <ul className="profile-list-list">
                    <li className="profile-list-item">
                      <span className="profile-list-th"> NickName</span>
                      <span className="profile-list-td">
                        {props.profile.nickname}
                      </span>
                    </li>
                    <li className="profile-list-item">
                      <span className="profile-list-th">State</span>
                      <span className="profile-list-td">
                        {props.profile.state}
                      </span>
                    </li>
                    <li className="profile-list-item">
                      <span className="profile-list-th">City</span>
                      <span className="profile-list-td">
                        {props.profile.city}
                      </span>
                    </li>
                    <li className="profile-list-item">
                      <span className="profile-list-th">About Me</span>
                      <span className="profile-list-td">
                        {props.profile.introduce_yourself}
                      </span>
                    </li>
                    <li className="profile-list-item-nested-list">
                      <span className="profile-list-th">Things I Love</span>
                      <span className="profile-list-td">
                        <ul className="no-list-style things-i-likes-list">
                          {props.profile.things_you_likes.map((v, i) => {
                            return (
                              <li className="things-i-like-list-item" key={i}>
                                {v},
                              </li>
                            );
                          })}
                        </ul>
                      </span>
                    </li>
                    <li className="profile-list-item-nested-list">
                      <p className="profile-list-th">Things I Hate</p>
                      <span className="profile-list-td">
                        <ul className="no-list-style things-i-hate-list">
                          {props.profile.things_you_hates.map((v, i) => {
                            return (
                              <li className="things-i-hate-list-item" key={i}>
                                {v},
                              </li>
                            );
                          })}
                        </ul>
                      </span>
                    </li>
                    <li className="profile-list-item">
                      <span className="profile-list-th">School</span>
                      <span className="profile-list-td">
                        {props.profile.school}
                      </span>
                    </li>
                    <li className="profile-list-item">
                      <span className="profile-list-th">Company</span>
                      <span className="profile-list-td">
                        {props.profile.company}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <h5 style={styles.heading}>
                  this user do not have profile information yet
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div>
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
      </div> */}
      <div className="specific-user-articles-section">
        <div className="profile-specific-users-articles-list-area">
          <h4>{props.name}'s Articles</h4>
          <ul className="specific-users-article-list no-list-style">
            {props.articles.map((v, i) => {
              return (
                <li className="specific-users-article-item">
                  {" "}
                  <Link to={`/get_specific_article_by_id/${v.id}`}>
                    {" "}
                    <div className="specific-user-image-and-text-container">
                      <div className="specific-user-image-area">
                        {" "}
                        <img
                          className="specific-user-image"
                          src={v.images[0]}
                          alt=""
                        />
                      </div>
                      <div className="specific-user-text-area">
                        <span className="specific-user-title-text" key={i}>
                          {v.title}
                        </span>
                        <br />
                        <span className="specific-user-price-text">
                          {v.price}
                        </span>
                        <br />
                        <span className="specific-user-date-text">
                          {new Date(v.date_created).toDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
          justifyContent: "space-evenly",
        }}
        className="specific-user-followers-and-following-section"
      >
        <div
          style={{ width: "400px", padding: "10px" }}
          className="profile-followers-list-area"
        >
          <h4>People Following This User(Followers)</h4>
          <h4>{props.followedBy.length} Followers</h4>
          <ul className="no-list-style" style={{ margin: "0", padding: "0" }}>
            {" "}
            {props.followedBy.map((v, i) => {
              return (
                <li style={{ marginBottom: "1px" }}>
                  {" "}
                  <a href={`/getSpecificUser/${v.id}`}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: "6px",
                        width: "200px",
                        backgroundColor: "#3A3A39",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          padding: "2px",
                          width: "54px",
                          height: "54px",
                        }}
                      >
                        {" "}
                        <img
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "40px",
                          }}
                          src={v.image}
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          height: "54px",
                          width: "100px",
                          padding: "10px",
                        }}
                      >
                        <span style={{ fontWeight: "600" }} key={i}>
                          {v.name}
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{ width: "400px", padding: "10px" }}
          className="profile-following-list-area"
        >
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
      </div>

      <div className="specific-user-stared-articles-section">
        <div className="profile-specific-users-stared-articles-list-area">
          <h4>Articles This User Stared</h4>
          <h4>{props.staredArticles.length} Stared Articles</h4>
          <ul className="specific-users-article-list no-list-style">
            {" "}
            {props.staredArticles.map((v, i) => {
              return (
                <li className="specific-users-article-item">
                  {" "}
                  <Link to={`/get_specific_article_by_id/${v.id}`}>
                    <div className="specific-user-image-and-text-container">
                      <div className="specific-user-image-area">
                        {" "}
                        <img
                          className="specific-user-image"
                          src={v.images[0]}
                          alt=""
                        />
                      </div>
                      <div className="specific-user-text-area">
                        <span className="specific-user-title-text" key={i}>
                          {v.title}
                        </span>
                        <br />
                        <span className="specific-user-price-text">
                          {v.price}
                        </span>
                        <br />
                        <span className="specific-user-date-text">
                          {new Date(v.date_created).toDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="specific-users-article-comments-section">
        <div>
          <h4>
            comments history of this user or link to comments history page
          </h4>
          <Link to={`/articleCommentHistory/${props.id}`}>
            {" "}
            Comment History Of This User
          </Link>
        </div>
        <div>
          <h4>articles list this user have ever commented.</h4>
        </div>
      </div>

      {/* {props.videos} */}
    </li>
  );
};

export default Radium(GetSpecificUserItem);
