import React from 'react';

const ImageIndexOfUserArticle = (props) => {
    return (
      <div>
        <h5>image index(You are using a following images)</h5>
        <ul className="image-index-list">
          {" "}
          {props.AllOfImagesOfThisUsersArticles.map(function (elm, index) {
            return (
              <li className="image-index-items" key={index}>
                {" "}
                <img src={elm} style={{ width: "150px", height: "80px" }} />
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default ImageIndexOfUserArticle;
