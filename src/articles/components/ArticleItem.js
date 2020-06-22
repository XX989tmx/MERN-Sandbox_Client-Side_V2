import React, { useState } from "react";

import {Link} from 'react-router-dom';

import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Map from '../../shared/components/UIElements/Map';

const ArticleItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = (params) => {
    setShowModal(true);
  };
  const closeModalHandler = (params) => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
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
      <li className="article-item">
        {/* <div className="article-item__image">
        <img />
    </div> */}
        <Card className="article-item__contents">
          <div className="article-item__article_content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>
              {/* 著者情報をonFloatでモーダルで表示させてもいい */}
              Written by {/* <Button onClick={openModalHandler}> */}
              <Link to="/u1/articles">{props.author}</Link>
              {/* </Button> */}
            </p>
            <p>publishedDate: {props.publishedDate}</p>
            <Link to="/:cid/articles">
              <p>Category: {props.category}</p>
            </Link>
          </div>
          <div className="article-item__actions">
            <Button onClick={openModalHandler}>View This Article</Button>
            <Button>Edit This Article</Button>
            <Button>Delete This Article</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ArticleItem;
