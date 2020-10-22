import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCommentSection = (props) => {
    return (
      <div>
        <p>{props.Comments.length} comments</p>
        {props.Comments.map((v, i) => {
          return (
            <div key={i}>
              <Link to={`/getSpecificUser/${v.user.id}`}>
                {" "}
                <div>
                  <span>
                    <img
                      style={{ width: "25px", height: "25px" }}
                      src={v.user.image}
                      alt=""
                    />
                  </span>
                  <span style={{ paddingLeft: "10px", fontSize: "16px" }}>
                    {v.user.name}
                  </span>
                  <span style={{ paddingLeft: "10px", fontSize: "16px" }}>
                    {v.comment}
                  </span>
                  <span style={{ paddingLeft: "10px", fontSize: "13px" }}>
                    {new Date(v.createdAt).toDateString()}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
}

export default ArticleCommentSection;
