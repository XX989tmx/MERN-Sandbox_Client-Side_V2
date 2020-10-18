import React, { useState, useContext, useEffect } from "react";

import { Link, Redirect } from "react-router-dom";
import { HashLink } from "react-router-hashlink";
import Modal from "../../shared/components/UIElements/Modal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./SpecificArticleByIdItem.css";
import Axios from "axios";

const SpecificArticleByIdItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [BuyModal, setBuyModal] = useState(false);
  const [SubscriptionRequestModal, setSubscriptionRequestModal] = useState(
    false
  );
  const [Sunday, setSunday] = useState();
  const [DiscountedAmount, setDiscountedAmount] = useState();
  const [ReferenceLinks, setReferenceLinks] = useState();

  useEffect(() => {
    const onLoad = (params) => {
      if (new Date(Date.now()).toDateString().split(" ")[0] === "Sun") {
        let discountPrice = props.price * 0.9;
        let normalPrice = props.price;
        let discountAmount = normalPrice - discountPrice;
        setDiscountedAmount(discountAmount);
        setSunday(true);
      }
      console.log(props.referenceSites);
      // const reference =
      // setReferenceLinks(reference);
    };
    onLoad();
  }, []);

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

  const starThisArticle = async (event) => {
    event.preventDefault();
    let articleId = props.id;
    console.log(articleId);

    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/articles/addArticleToStaredList/${auth.userId}/${articleId}`
      );
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // const getArticleByTags = (params) => {
  //   sendRequest(
  //     process.env.REACT_APP_BACKEND_URL + `/articles/get_article_by_tags/:tags`
  //   );
  // };

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
          {/* <p>{props.contents[0].content}</p> */}
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
              {Sunday
                ? new Number(props.price * 0.9).toFixed(0)
                : new Number(props.price).toFixed(0)}
            </span>
            {Sunday && (
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "rgb(201, 30, 30)",
                }}
              >
                (-{new Number(DiscountedAmount).toFixed(0)} Saved)
              </span>
            )}
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

      <li className="specific-article-item">
        {/* <div className="article-item__image">
        <img />
    </div> */}

        <Card className="article-item__contents">
          {/* <Link
            to={`/get_specific_article_by_id/${props.id}`}
            style={{ textDecoration: "none" }}
          > */}
          <div className="article-item__image center">
            <h2>{props.title}</h2>
            <img
              src={props.images[0]}
              alt={props.title}
              style={{ width: "950px", height: "500px" }}
            />
          </div>
          <div className="article-items-table-of-contents">
            <ul className="article-items-table-of-contents-list">
              {props.contents.map((c) => (
                <HashLink
                  to={`/get_specific_article_by_id/${props.id}#${c.id}`}
                >
                  <li>
                    {`${props.contents.indexOf(c) + 1} `} {c.heading}
                  </li>
                </HashLink>
              ))}
            </ul>
          </div>
          <div className="article-item__article_content">
            <article>
              {props.contents.map((c) => (
                <div>
                  <img
                    src={props.images[props.contents.indexOf(c) + 1]}
                    // alt={props.title}
                    style={{ width: "400px", height: "250px" }}
                  />
                  <h3 id={`${c.id}`}>
                    {`${props.contents.indexOf(c) + 1} `}
                    {c.heading}
                  </h3>
                  <p>{c.content}</p>
                  <hr />
                </div>
              ))}

              {/* <h3 id="heading2">2 {props.heading2}</h3>
              <p>{props.content2}</p>
              <hr />
              <h3 id="heading3">3 {props.heading3}</h3>
              <p>{props.content3}</p>
              <hr />
              <h3 id="heading4">4 {props.heading4}</h3>
              <p>{props.content4}</p>
              <hr /> */}
            </article>
            {/* <p>{props.id}</p> */}
            <span>
              {/* 著者情報をonFloatでモーダルで表示させてもいい */}
              {/* <Button onClick={openModalHandler}> */}
              {/* <Link
                to={`/${props.authorId}/articles`}
                style={{ textDecoration: "none" }}
              ></Link> */}
              <Link
                to={`/getSpecificUser/${props.authorId}`}
                style={{ textDecoration: "none" }}
              >
                <span className="author-info">author: {props.authorName}</span>
                <span className="contact-info">
                  contact: {props.authorEmail}
                </span>
              </Link>
              {/* </Button> */}
            </span>
            {/* <p>publishedDate: {props.publishedDate}</p> */}

            <Link
              to={`/get_article_by_categories/${props.categories}`}
              style={{ textDecoration: "none" }}
            >
              <div>
                <p className="categoryArea">Category: {props.categories}</p>
              </div>
            </Link>
            <Link
              to={`/get_article_by_tags/${props.tags}`}
              style={{ textDecoration: "none" }}
            >
              <div>
                <p className="tag-area">Tag: {props.tags}</p>
              </div>
            </Link>
            <div>
              <h4>{props.StaredBy.length} Star</h4>
            </div>
            <div>
              <button onClick={starThisArticle}>Star This Article</button>
            </div>
            <h4>
              price:{" "}
              <span style={{ color: "rgb(20, 155, 20)", fontSize: "18px" }}>
                {Sunday
                  ? new Number(props.price * 0.9).toFixed(0)
                  : new Number(props.price).toFixed(0)}{" "}
              </span>
              {Sunday && (
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "rgb(201, 30, 30)",
                  }}
                >
                  (-{new Number(DiscountedAmount).toFixed(0)} Saved)
                </span>
              )}
            </h4>
            {props.downloadable ? (
              <span style={{ color: "green", border: "1px solid green" }}>
                Downloadable
              </span>
            ) : (
              <span style={{ color: "red", border: "1px solid red" }}>
                Not Downloadable
              </span>
            )}
            <p style={{ fontSize: "14px", color: "grey" }}>
              Date Created: {new Date(props.date_created).toDateString()}
            </p>
          </div>
          <div>
            <h5>References</h5>
            <ul>
              {props.referenceSites.map((s) => (
                <li>
                  <a target="_blank" href={s.link}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>External Links</h5>
            <ul>
              {props.externalSites.map((e) => (
                <li>
                  <a target="_blank" href={e.link}>
                    {e.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* </Link> */}
          <div id="control" className="article-item__actions">
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
      <div>
        <h3>Same author also writes the following articles.</h3>
        <ul className="same-authors-other-articles-list">
          {props.articlesExceptTheCurrentOne.map(function (elm, index) {
            return (
              <a href={`/get_specific_article_by_id/${elm.id}`}>
                <li className="same-authors-other-articles-item" key={index}>
                  <h4>{elm.title}</h4>
                  <img
                    style={{ width: "140px", height: "80px" }}
                    src={elm.images[0]}
                  />
                  <h6>{elm.price}</h6>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SpecificArticleByIdItem;
