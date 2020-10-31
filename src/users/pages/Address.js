import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import AddressList from "../components/AddressList";
import { Link } from "react-router-dom";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

const Address = () => {
  const auth = useContext(AuthContext);
  const [Addresses, setAddresses] = useState([]);
  const addressId = useParams().addressId;
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async (params) => {
      setIsLoading(true);
      let response;
      try {
        response = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users/getAllAddress/${auth.userId}`
        );
      } catch (error) {
        console.log(error);
      }
      const data = response.data;
      console.log(data);
      const addresses = data.user.addresses;
      setAddresses(addresses);
      if (!!addresses) {
        setIsLoading(false);
      }
      console.log(addresses);
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}{" "}
      {!IsLoading && Addresses && (
        <div>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingLeft: "20%",
            }}
          >
            <div
              style={{ width: "1080px", minHeight: "100vh" }}
              className="address-container"
            >
              <div>
                {" "}
                <h1> Address</h1>
                <h4>default address</h4>
                <h4>check all address</h4>
                <Link to={`/${auth.userId}/createAddress`}>
                  <h4>create address</h4>
                </Link>
                <h4>update address</h4>
                <h4>delete address</h4>
                <div>
                  <AddressList Addresses={Addresses} />
                </div>
              </div>
            </div>
            <div
              style={{ padding: "20px", width: "370px" }}
              className="my-profile-sidebar-area"
            >
              <MyProfileSideNavigation />
            </div>
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default Address;
