import React, { useContext, useEffect, useState } from "react";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import FollowersList from "../components/FollowersList";
import { AuthContext } from "../../shared/context/auth-context";
import Axios from "axios";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

const Followers = () => {
  const auth = useContext(AuthContext);
  const [Followers, setFollowers] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async (params) => {
      async function getAndSetFollowersData(params) {
        setIsLoading(true);
        let response;
        try {
          response = await Axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/users/getUsersFollowingYou/${auth.userId}`
          );
        } catch (error) {
          console.log(error);
        }
        const data = response.data;
        const followers = data.peopleFollowingYou;
        setFollowers(followers);
        function moveToTop(params) {
          window.scrollTo(0, 0);
        }
        moveToTop();
        setIsLoading(false);
        console.log(data);
      }
      await getAndSetFollowersData();
    };
    fetch();
  }, []);
  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}{" "}
      {!IsLoading && Followers && (
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
                <h1> Followers</h1>
                <FollowersList Followers={Followers} />
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

export default Followers;
