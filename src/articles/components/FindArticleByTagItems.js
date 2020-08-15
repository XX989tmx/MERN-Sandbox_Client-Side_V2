import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

const FindArticleByTagItems = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [BuyModal, setBuyModal] = useState(false);
  const [SubscriptionRequestModal, setSubscriptionRequestModal] = useState(
    false
  );

  const openModalHandler = (params) => {
    setShowModal(true);
  };
  const closeModalHandler = (params) => {
    setShowModal(false);
  };

  const openBuyModalHandler = (params) => {
    setBuyModal(true);
  };
  const closeBuyModalHandler = (params) => {
    setBuyModal(false);
  };

  const openSubscriptionRequestHandler = (params) => {
    setSubscriptionRequestModal(true);
  };

  const closeSubscriptionRequestHandler = (params) => {
    setSubscriptionRequestModal(false);
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

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.title}
        contentClass="article-item__modal-content"
        footerClass="article-item__modal-actions"
        footer={
          <Button btnBlack onClick={closeModalHandler}>
            CLOSE
          </Button>
        }
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
      <Modal
        show={BuyModal}
        onCancel={closeBuyModalHandler}
        header="Checkout Confirmation"
        footer={
          <React.Fragment>
            <Button btnGreen>Proceed To Checkout</Button>{" "}
            <Button btnBlackInverse onClick={closeBuyModalHandler}>
              CLOSE
            </Button>
          </React.Fragment>
        }
        headerClass="modal__header-green"
      >
        <div>
          <p>
            To continue to checkout, you need to <Link to={"/auth"}>login</Link>{" "}
            or <Link to={"/auth"}>sign up</Link> if you did not create account
            yet. .{" "}
          </p>
          <h3>Do you proceed to checkout??</h3>
          <h4>
            price:{" "}
            <span style={{ color: "rgb(20, 155, 20)", fontSize: "18px" }}>
              {props.price}
            </span>
          </h4>
        </div>
      </Modal>
      <Modal
        show={SubscriptionRequestModal}
        onCancel={closeSubscriptionRequestHandler}
        header="Join Our Subscription Plan"
        footer={
          <React.Fragment>
            <Button btnBlackInverse>Free Plan</Button>
            <Button btnBlackInverse>Standard Plan</Button>
            <Button btnPremium>Premium Plan</Button>
            <Button btnBlack onClick={closeSubscriptionRequestHandler}>
              CLOSE
            </Button>
          </React.Fragment>
        }
        headerClass="modal__header-subscription"
      >
        <div>
          <p>To Download article, Join Our Subscription Plan.</p>

          <ul>
            <li>Free Plan: 3 articles per Day</li>
            <span>Check</span>
            <li>Standard Plan:15 articles per Day </li>
            <span>Check</span>
            <li>Premium Plan: Unlimited Download</li>
            <span>Check</span>
          </ul>

          <p>
            Check Detail information. link to subscription plan explanation page
          </p>
        </div>
      </Modal>
      {isLoading && <LoadingSpinner asOverlay />}
      <li className="article-item ">
        <Card className="article-item__contents">
          <Link
            to={`/get_specific_article_by_id/${props.id}`}
            style={{ textDecoration: "none" }}
          >
            {/* <h1>
        {props.countByTag} 
        {props.tags} Related articles found.
      </h1> */}
            <div className="article-item__image">
              <img
                src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
                style={{ width: "200px", height: "130px" }}
              />
            </div>
            <div className="article-item__article_content">
              <h2>{props.title}</h2>
              <p>{props.content}</p>
              {/* <p>{props.id}</p> */}
              <Link
                to={`/${props.authorId}/articles`}
                style={{ textDecoration: "none" }}
              >
                <p>{props.authorName}</p>
              </Link>
              <p>{props.authorEmail}</p>
              <Link
                to={`/get_article_by_categories/${props.categories}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <p className="categoryArea">
                    Categories : {props.categories}
                  </p>
                </div>
              </Link>
              <Link
                to={`/get_article_by_tags/${props.tags}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <p className="tag-area">Tags : {props.tags}</p>
                </div>
              </Link>
              <h4>
                price:{" "}
                <span style={{ color: "rgb(20, 155, 20)", fontSize: "18px" }}>
                  {props.price}
                </span>
              </h4>
              <p style={{ fontSize: "14px", color: "grey" }}>
                {new Date(props.date_created).toDateString()}
              </p>
            </div>
          </Link>
          <div className="article-item__actions">
            <Button btnBlack onClick={openModalHandler}>
              View This Article
            </Button>

            {auth.userId === props.author && (
              <Button btnBlackInverse to={`/articles/${props.id}`}>
                Edit This Article
              </Button>
            )}
            {auth.userId === props.author && (
              <Button danger onClick={showDeleteWarningHandler}>
                Delete This Article
              </Button>
            )}

            {auth.isLoggedIn && (
              <Button btnGreen onClick={openBuyModalHandler}>
                Buy This Article
              </Button>
            )}
            {auth.isLoggedIn && (
              <Button btnGreen onClick={openSubscriptionRequestHandler}>
                Download This Article
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default FindArticleByTagItems;
