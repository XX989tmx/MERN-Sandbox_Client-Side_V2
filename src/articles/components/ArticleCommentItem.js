import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";
import { useState } from "react";
const ArticleCommentItem = (props) => {
  const auth = useContext(AuthContext);
  const [Information, setInformation] = useState("");
  const [ShowFlagCommentModal, setShowFlagCommentModal] = useState(false);
  const flagCommentSubmitHandler = async (event) => {
    event.preventDefault();
    const data = {
      information: Information,
    };
    console.log(props.id);
    try {
      await Axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/articles/flagArticleComment/${auth.userId}/${props.id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const flagInformationChangeHandler = (event) => {
    setInformation(event.target.value);
  };

  const openFlagCommentModalHandler = (params) => {
    setShowFlagCommentModal(true);
  };

  const closeFlagCommentModalHandler = (params) => {
    setShowFlagCommentModal(false);
  };
  return (
    <div>
      <React.Fragment>
        <Modal
          show={ShowFlagCommentModal}
          onCancel={closeFlagCommentModalHandler}
          header="Flag This Comment"
          footer={
            <React.Fragment>
              <Button btnBlack onClick={closeFlagCommentModalHandler}>
                Cancel
              </Button>
            </React.Fragment>
          }
        >
          <form action="" onSubmit={flagCommentSubmitHandler}>
            <input
              value={Information}
              type="text"
              onChange={flagInformationChangeHandler}
              placeholder="input additional information (optional)"
            />
            <Button type="submit">Flag This Comment</Button>
          </form>
        </Modal>
        <div>
          {" "}
          <div>
            <Link to={`/getSpecificUser/${props.user.id}`}>
              {" "}
              <span>
                <img
                  style={{ width: "25px", height: "25px" }}
                  src={props.user.image}
                  alt=""
                />
              </span>
              <span style={{ paddingLeft: "10px", fontSize: "16px" }}>
                {props.user.name}
              </span>
              <span style={{ paddingLeft: "10px", fontSize: "16px" }}>
                {props.comment}
              </span>
              <span style={{ paddingLeft: "10px", fontSize: "13px" }}>
                {new Date(props.createdAt).toDateString()}
              </span>
            </Link>
            <span>
              <Button onClick={openFlagCommentModalHandler}>Flag</Button>
            </span>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default ArticleCommentItem;
