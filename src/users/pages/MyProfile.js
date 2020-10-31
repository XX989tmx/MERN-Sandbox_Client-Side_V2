import React, { useEffect, useState } from "react";
import MyProfileList from "../components/MyProfileList";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";
import "./MyProfile.css";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";

const MyProfile = () => {
  const userId = useParams().userId;
  const [UserArray, setUserArray] = useState([]);
  const auth = useContext(AuthContext);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async (params) => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL + `/users/getSpecificUser/${userId}`
        );
        const data = response.data;
        const user = data.result;
        console.log(user);
        setUserArray(user);

        function moveToTop(params) {
          window.scrollTo(0, 0);
        }
        moveToTop();
        if (!!user) {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && UserArray && (
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
            <div className="my-profile-container">
              <MyProfileList UserArray={UserArray} />
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

export default MyProfile;
