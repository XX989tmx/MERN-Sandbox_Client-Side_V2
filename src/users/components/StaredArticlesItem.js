import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const StaredArticlesItem = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <Link to={`/get_specific_article_by_id/${props.id}`}>
        {" "}
        <div>
          {props.title}
          {/* {props.images} */}
          {/* {props.referenceSites} */}
          {props.author_name}
          {props.author_email}
          {/* {props.author_image} */}
          {/* {props.categories} */}
          {props.date_created}
          {/* {props.tags} */}
          {props.price}
          {props.downloadable}
          {props.viewCount}
        </div>
      </Link>
      <Link to={`/getSpecificUser/${props.author_id}`}>
        <div>
          <h4>{props.author_name}</h4>
        </div>
      </Link>
      {/* {props.comments} */}
      {/* {props.staredBy} */}
    </div>
  );
};

export default StaredArticlesItem;
