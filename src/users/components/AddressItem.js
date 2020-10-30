import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";

const AddressItem = (props) => {
  const auth = useContext(AuthContext);
  return (
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

          <Button>Delete</Button>
        </div>
      </div>
    </li>
  );
};

export default AddressItem;
