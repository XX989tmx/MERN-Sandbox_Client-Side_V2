import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./ArticleItem.css";

const ArticleItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openModalHandler = (params) => {
    setShowModal(true);
  };
  const closeModalHandler = (params) => {
    setShowModal(false);
  };

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
        process.env.REACT_APP_BACKEND_URL + `/articles/${props.id}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  const getArticleByTags = (params) => {
    sendRequest(
      process.env
        .REACT_APP_BACKEND_URL + `/articles/get_article_by_tags/:tags`
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.title}
        contentClass="article-item__modal-content"
        footerClass="article-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <p>{props.content}</p>
          {/* <Map center={props.coordinates} zoom={16}/> */}
        </div>
      </Modal>
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
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="article-item ">
        {/* <div className="article-item__image">
        <img />
    </div> */}

        <Card className="article-item__contents">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="article-item__image">
            <img
              src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              alt={props.title}
              style={{ width: "300px", height: "230px" }}
            />
          </div>
          <div className="article-item__article_content">
            <Link
              to={`/get_specific_article_by_id/${props.id}`}
              style={{ textDecoration: "none" }}
            >
              <h2>{props.title}</h2>
            </Link>
            <p>{props.content}</p>
            <p>{props.id}</p>
            <p>
              {/* 著者情報をonFloatでモーダルで表示させてもいい */}
              Written by {/* <Button onClick={openModalHandler}> */}
              <Link to="/u1/articles" style={{ textDecoration: "none" }}>
                {props.author}
              </Link>
              {/* </Button> */}
            </p>
            {/* <p>publishedDate: {props.publishedDate}</p> */}
            <Link to="/:cid/articles">
              {/* <p>Category: {props.category}</p> */}
            </Link>
            <Link
              to={`/get_article_by_categories/${props.categories}`}
              style={{ textDecoration: "none" }}
            >
              <p>Category: {props.categories}</p>
            </Link>
            <Link
              to={`/get_article_by_tags/${props.tags}`}
              style={{ textDecoration: "none" }}
            >
              <p>Tag: {props.tags}</p>
            </Link>
            <h4>price: {props.price}</h4>
            <p>Date Created: {props.date_created}</p>
          </div>
          <div className="article-item__actions">
            <Button onClick={openModalHandler}>View This Article</Button>

            {auth.userId === props.author && (
              <Button to={`/articles/${props.id}`}>Edit This Article</Button>
            )}
            {auth.userId === props.author && (
              <Button onClick={showDeleteWarningHandler}>
                Delete This Article
              </Button>
            )}

            {auth.isLoggedIn && <Button>Buy This Article</Button>}
            {auth.isLoggedIn && <Button>Download This Article</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ArticleItem;
