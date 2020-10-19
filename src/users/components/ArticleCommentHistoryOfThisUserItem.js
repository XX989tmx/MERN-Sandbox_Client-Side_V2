import React from "react";
import { Link } from "react-router-dom";
import './ArticleCommentHistoryOfThisUserItem.css';

const ArticleCommentHistoryOfThisUserItem = (props) => {
  return (
    <div>
      <h4>{props.name} s comment history</h4>
      <h3>{props.article_comments.length} Comments</h3>
      {props.name}
      <tr>
        <td>
          <h3>comment</h3>
        </td>
        <td>
          <h3>article</h3>
        </td>
      </tr>

      {props.article_comments.map((v, i) => {
        return (
          <tr>
            <td>
              <div>
                <p>{v.comment}</p>
                <p>{new Date(v.createdAt).toDateString()}</p>
              </div>
            </td>

            <td>
              <Link to={`/get_specific_article_by_id/${v.article.id}`}>
                {" "}
                <div>
                  <h4>{v.article.title}</h4>
                  {/* <img style={{width:'80px',height:'40px'}} src={v.article.images[0]} alt="" /> */}
                  <p>star {v.article.staredBy.length}</p>
                </div>
              </Link>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default ArticleCommentHistoryOfThisUserItem;
