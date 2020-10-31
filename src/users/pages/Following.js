import React from "react";
import Axios from "axios";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import FollowingList from "../components/FollowingList";
import { useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";
import { useEffect } from "react";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

const Following = () => {
  const auth = useContext(AuthContext);
  const [Following, setFollowing] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async (params) => {
      async function getAndSetFollowingData(params) {
        setIsLoading(true);
        let response;
        try {
          response = await Axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/users/getUsersYouAreFollowing/${auth.userId}`
          );
        } catch (error) {
          console.log(error);
        }
        const data = response.data;
        console.log(data);
        const peopleYouAreFollowing = data.peopleYouAreFollowing;
        setFollowing(peopleYouAreFollowing);
        function moveToTop(params) {
          window.scrollTo(0, 0);
        }
        moveToTop();
        setIsLoading(false);
      }
      await getAndSetFollowingData();
    };
    fetch();
  }, []);
  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}{" "}
      {!IsLoading && Following && (
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
                <h1> Following</h1>
                <FollowingList Following={Following} />
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

export default Following;
