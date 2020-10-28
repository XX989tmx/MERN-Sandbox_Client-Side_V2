import React, { useContext, useEffect, useState } from "react";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import FollowersList from "../components/FollowersList";
import { AuthContext } from "../../shared/context/auth-context";
import Axios from "axios";
const Followers = () => {
  const auth = useContext(AuthContext);
  const [Followers, setFollowers] = useState([]);
  useEffect(() => {
    const fetch = async (params) => {
      async function getAndSetFollowersData(params) {
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
        console.log(data);
      }
      await getAndSetFollowersData();
    };
    fetch();
  }, []);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Followers;
