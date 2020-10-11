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
  const [Disliked, setDisliked] = useState(0);
  const [CommentInput, setCommentInput] = useState("");
  const [LatestComment, setLatestComment] = useState("");
  const [NewlyAddedCommentsArray, setNewlyAddedCommentsArray] = useState([]);

  const [NewCommentAdded, setNewCommentAdded] = useState(false);
  const [CommentCountAfterAdd, setCommentCountAfterAdd] = useState();

  const [ResponseComment, setResponseComment] = useState([]);
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

  const addDislikeToVideoHandler = async (params) => {
    setDisliked(1);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/videos/${props.id}/addDislikeToVideo`
      );
    } catch (error) {}
  };

  const commentInputChangeHandler = (event) => {
    setCommentInput(event.target.value);
  };

  const commentInputSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/${props.id}/addComment`,
        "POST",
        JSON.stringify({ comment: CommentInput }),
        { "Content-Type": "application/json" }
      );
      // let array = [];
      // const latestCommentPos = responseData.existingVideoComments.length - 1;
      // array.push(responseData.existingVideoComments[latestCommentPos]);
      // console.log(responseData.existingVideoComments[latestCommentPos]);
      // console.log(array);
      // setNewlyAddedCommentsArray(array);
      // setLatestComment(responseData.existingVideoComments[latestCommentPos]);
      setResponseComment(responseData.existingVideoComments);
      setNewCommentAdded(true);
      setCommentCountAfterAdd(responseData.existingVideoComments.length);
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

        <h4>{props.views}views</h4>
        <button className="liked-button" onClick={addLikeToVideoHandler}>
          {props.liked + Like} Liked
        </button>
        <button className="disliked-button" onClick={addDislikeToVideoHandler}>
          {props.disliked + Disliked} Disliked
        </button>
        {/* <Link
          to={`/videos/get_video_by_tags/${props.tags}`}
          style={{ textDecoration: "none" }}
        >
          <span className="videoById-tag">Tag: {props.tags}</span>
        </Link> */}
        <span>Tag:</span>
        {props.videoTagsArray.map((v, i) => {
          return (
            <Link to={`/videos/get_video_by_tags/${v}`}>
              <span className="videoById-tag" key={i}>{v}</span>
            </Link>
          );
        })}

        <Link
          to={`/videos/get_video_by_categories/${props.categories}`}
          style={{ textDecoration: "none" }}
        >
          <span className="videoById-category">
            Category: {props.categories}
          </span>
        </Link>
        <span className="videoById-persons">Person: {props.persons}</span>
        {/* <p>{props.id}</p> */}
        <p>Updated at: {new Date(props.date_created).toDateString()}</p>
        <p className="videoByIdItem-description">{props.description}</p>

        {(!NewCommentAdded && <p>{props.comments.length}Comments</p>) ||
          (NewCommentAdded && <p>{CommentCountAfterAdd}Comments</p>)}
        <div>
          {/* {ResponseComment ? (<ul>{ResponseComment.map((c) => <li>{c}</li>)}</ul>) : (<ul>{props.comments.map((c) => <li>{c}</li>)}</ul>)} */}
          {(!NewCommentAdded && (
            <ul>
              {props.comments.map((c) => (
                <li>{c}</li>
              ))}

              {/* {NewlyAddedCommentsArray.map((a) => (
              <li>{a}</li>
            ))} */}
            </ul>
          )) ||
            (NewCommentAdded && (
              <ul>
                {ResponseComment.map((c) => (
                  <li>{c}</li>
                ))}
              </ul>
            ))}
        </div>
        <div>
          <form onSubmit={commentInputSubmitHandler}>
            <input
              type="text"
              value={CommentInput}
              onChange={commentInputChangeHandler}
            />
            <button type="submit">add comment</button>
          </form>
        </div>
        {/* <Link to={`/videos/update/${props.id}`}>
          <p>temporaly update link</p>
        </Link>
        <button onClick={confirmDeleteHandler}>temporaly delete button</button> */}
      </div>
    </React.Fragment>
  );
};

export default VideoByIdItem;
