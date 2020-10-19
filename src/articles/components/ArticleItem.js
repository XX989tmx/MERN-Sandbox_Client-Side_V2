import React, { useState, useContext, useEffect } from "react";

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
import { estimatedReadingTime } from "../../shared/util/estimatedReadingTime";

const ArticleItem = (props) => {
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
  const [WordCount, setWordCount] = useState();
  const [EstimatedReadingTime, setEstimatedReadingTime] = useState();

  useEffect(() => {
    const onLoad = (params) => {
      if (new Date(Date.now()).toDateString().split(" ")[0] === "Sun") {
        let discountPrice = props.price * 0.9;
        let normalPrice = props.price;
        let discountAmount = normalPrice - discountPrice;
        setDiscountedAmount(discountAmount);
        setSunday(true);
      }
      let contentArray = [];
      let r;
      for (let index = 0; index < props.contents.length; index++) {
        const element = props.contents[index];
        contentArray.push(element.content);
        r = contentArray.join(',')
      }
      // console.log(contentArray);
      // console.log(r);

      // const r = contentArray.reduce(
      //   (prevValue, currentValue) => prevValue + currentValue
      // );
      // console.log(r);
      // const addAllCharacterOfContent = (
      //   content,
      //   content2,
      //   content3,
      //   content4
      // ) => {
      //   const TotalContent = content + content2 + content3 + content4;
      //   return TotalContent;
      // };
      // const ContentAll = addAllCharacterOfContent(
      //   props.content,
      //   props.content2,
      //   props.content3,
      //   props.content4
      // );
      // props.contents.reduce((p,c) => {

      // })

      const countWord = (value) => {
        return value.split(/\W+/).length;
      };
      setWordCount(countWord(new String(r)));

      setEstimatedReadingTime(
        new Number(estimatedReadingTime(new String(r))).toFixed(1)
      );
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
          <p>{props.contents[0].content}</p>
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
      {/* {isLoading && <LoadingSpinner asOverlay />} */}
      <li className="article-item ">
        {/* <div className="article-item__image">
        <img />
    </div> */}

        <Card className="article-item__contents">
          <Link
            to={`/get_specific_article_by_id/${props.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="article-header">
              <h2>{props.title}</h2>
            </div>
            <div className="article-body">
              <div className="article-body-section1">
                <div>
                  <img
                    className="article-item-image-item"
                    src={props.images[0]}
                    alt={props.title}
                  />
                </div>
                <div className="article-content-box">
                  <p>
                    {new String(props.contents[0].content).substr(0, 200)}{" "}
                    continue to read....
                  </p>
                </div>
              </div>
              <div className="article-body-section2">
                <p>Word Count: {WordCount}</p>

                <h4 className="estimated-reading-time-tag">
                  Estimated Reading Time: {EstimatedReadingTime} min
                </h4>
              </div>
              <div className="article-body-section3">
                {/* <Link
                  to={`/${props.authorId}/articles`}
                  style={{ textDecoration: "none" }}
                > */}
                <Link
                  to={`/getSpecificUser/${props.authorId}`}
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <span className="author-info">
                      author: {props.authorName}
                    </span>
                  </div>
                  <div>
                    <span className="contact-info">
                      contact: {props.authorEmail}
                    </span>
                  </div>
                </Link>
                {/* <Link to={`/getSpecificUser/${props.authorId}`}>
                  <span>user: {props.authorName}</span>
                </Link> */}
                {/* <span> */}
                {/* 著者情報をonFloatでモーダルで表示させてもいい */}
                {/* <Button onClick={openModalHandler}> */}

                {/* </Button> */}
                {/* </span> */}

                <Link
                  to={`/get_article_by_categories/${props.categories}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="margin-left13">
                    <p className="categoryArea">Category: {props.categories}</p>
                  </div>
                </Link>
                <Link
                  to={`/get_article_by_tags/${props.tags}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="margin-left13">
                    <p className="tag-area">Tag: {props.tags}</p>
                  </div>
                </Link>
              </div>
              <div className="article-body-section4">
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
                <div className="downloadable-box">
                  {props.downloadable ? (
                    <span style={{ color: "green", border: "1px solid green" }}>
                      Downloadable
                    </span>
                  ) : (
                    <span style={{ color: "red", border: "1px solid red" }}>
                      Not Downloadable
                    </span>
                  )}
                </div>
                <div className="date-created-box">
                  <p className="date-created-tag">
                    Date Created: {new Date(props.date_created).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <div className="article-footer">
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
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ArticleItem;
