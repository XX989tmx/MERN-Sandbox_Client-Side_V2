import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item center">
      {/* <Card className="user-item__content" > */}
      <Link
        to={`/getSpecificUser/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="user-item-container-wrapper">
          <div className="user-item-container">
            <div className="user-item-image-wrapper">
              <div className="user-item__image">
                <img className="user-image" src={props.image} />
              </div>
            </div>
            <div className="user-item-info-wrapper">
              <div className="user-item__info">
                <p className="user-item-name">{props.name}</p>
                <p className="user-item-article-count">
                  {props.articleCount}
                  {props.articleCount === 1 ? "Article" : "Articles"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* </Card> */}
    </li>
  );
};

export default UserItem;
