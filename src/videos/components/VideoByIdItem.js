import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./VideoByIdItem.css";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useParams, useHistory } from "react-router-dom";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const VideoByIdItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [Like, setLike] = useState(0);
  useEffect(() => {
    const onLoad = () => {};
    onLoad();
  }, []);

  const confirmDeleteHandler = async (params) => {
    // setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/${props.id}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push("/videos/main");
      // props.onDelete(props.id);
    } catch (err) {}
  };

  const VideoViewCounter = async (params) => {
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/${props.id}/addViewCount`
      );
    } catch (error) {}
  };

  const addLikeToVideoHandler = async (params) => {
    setLike(1);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/${props.id}/addLikeToVideo`
      );
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="video-area">
        <iframe
          onLoad={VideoViewCounter}
          className="video-iframe"
          src={props.src}
          // width="1082px"
          // height="610px"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h4>{props.views}views</h4>
        <button onClick={addLikeToVideoHandler}>
          {props.liked + Like}Like
        </button>
        <Link
          to={`/videos/get_video_by_tags/${props.tags}`}
          style={{ textDecoration: "none" }}
        >
          <span className="videoById-tag">{props.tags}</span>
        </Link>
        <Link
          to={`/videos/get_video_by_categories/${props.categories}`}
          style={{ textDecoration: "none" }}
        >
          <span className="videoById-category">{props.categories}</span>
        </Link>
        <span className="videoById-persons">{props.persons}</span>
        {/* <p>{props.id}</p> */}
        <p>{props.date_created}</p>
        {/* <Link to={`/videos/update/${props.id}`}>
          <p>temporaly update link</p>
        </Link>
        <button onClick={confirmDeleteHandler}>temporaly delete button</button> */}
      </div>
    </React.Fragment>
  );
};

export default VideoByIdItem;
