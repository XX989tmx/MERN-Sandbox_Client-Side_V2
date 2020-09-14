import React, { useState, useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import "./VideoItems.css";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { Link } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import { useHttpClient } from "../../shared/hooks/http-hook";

const VideoManagementItems = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const showDeleteWarningHandler = (params) => {
    setShowConfirmModal(true);
  };
  const cancelDeleteWarningHandler = (params) => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = async (params) => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/videos/${props.id}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure?"
        footerClass="article-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this video? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="video-item-container center">
        <Link to={`/videos/${props.id}`} style={{ textDecoration: "none" }}>
          <div className="video-image-box">
            <img
              className="video-image"
              // src="https://storage.googleapis.com/sample_test_image_bucket/images/2020-06-10%20147.jpg"
              src={props.image}
              alt=""
              // style={{ width: "220px", height: "125px" }}
            />
            {props.hd && <span className="hd">HD</span>}
            {props.is4k && <span className="is4K">4K</span>}
            <span className="duration">{props.duration}</span>
          </div>
          <div>
            <h4 className="video-item-title">{props.title}</h4>
            <p className="video-item-description">
              {new String(props.description).substr(0, 50)}
            </p>

            <span className="video-item-date">
              updated at {new Date(props.date_created).toDateString()}
            </span>
          </div>
          {/* <iframe
            src={props.src}
            width="600"
            height="400"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe> */}
        </Link>
        <Link
          to={`/videos/get_video_by_tags/${props.tags}`}
          style={{ textDecoration: "none" }}
        >
          <span className="video-item-tags">{props.tags}</span>
        </Link>
        <Link
          to={`/videos/get_video_by_categories/${props.categories}`}
          style={{ textDecoration: "none" }}
        >
          <span className="video-item-category">{props.categories}</span>
        </Link>
        <span className="videoItem-persons">{props.persons}</span>
        <div>
          <Button btnGreen to={`/videos/update/${props.id}`}>
            Update
          </Button>
          <Button danger onClick={showDeleteWarningHandler}>
            Delete
          </Button>
        </div>
        {/* <p>{props.id}</p> */}
      </li>
    </React.Fragment>
  );
};

export default VideoManagementItems;
