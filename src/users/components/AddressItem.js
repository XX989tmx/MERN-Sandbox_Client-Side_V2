import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import Modal from "../../shared/components/UIElements/Modal";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
const AddressItem = (props) => {
  const auth = useContext(AuthContext);
  const [ShowDeleteAddressModal, setShowDeleteAddressModal] = useState(false);
  const addressId = useParams().addressId;
  const history = useHistory();
  const openDeleteAddressModalHandler = (params) => {
    setShowDeleteAddressModal(true);
  };

  const closeDeleteAddressModalHandler = (params) => {
    setShowDeleteAddressModal(false);
  };

  const deleteAddressSubmitHandler = async (event) => {
    // event.preventDefault();
    try {
      await Axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/users/deleteAddress/${auth.userId}/${props.id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Modal
        show={ShowDeleteAddressModal}
        onCancel={closeDeleteAddressModalHandler}
        header="Delete Address?"
        footer={
          <React.Fragment>
            <Button btnBlack onClick={closeDeleteAddressModalHandler}>
              Cancel
            </Button>
            <Button danger onClick={deleteAddressSubmitHandler}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p style={{ fontSize: "15px", fontWeight: "500", lineHeight: "20px" }}>
          Are you sure you want to delete this address?
        </p>
      </Modal>
      <li>
        <div
          style={{
            width: "310px",
            height: "300px",
            border: "solid 1px grey",
            borderRadius: "10px",
          }}
        >
          <div style={{ height: "10%" }}></div>
          <div style={{ height: "80%", borderTop: "1px solid grey" }}>
            <div
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "20px",
              }}
            >
              {" "}
              <span>{props.name}</span>
              <br />
              <span>{props.zip_code}</span>
              <br />
              <span>{props.todoufuken}</span>
              <br />
              <span>{props.address_info1}</span>
              <br />
              <span>{props.address_info2}</span>
              <br />
              <span>{props.country}</span>
              <br />
              <span>Phone: </span> <span>{props.phone_number}</span>
              <br />
              <span>{props.email}</span>
              <br />
              <span>{props.company}</span>
              <br />
            </div>
          </div>
          <div style={{ height: "10%" }}>
            <Link to={`/${auth.userId}/updateAddress/${props.id}`}>
              <Button>Update</Button>
            </Link>

            <Button onClick={openDeleteAddressModalHandler}>Delete</Button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default AddressItem;
