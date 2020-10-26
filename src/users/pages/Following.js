import React from "react";
import Axios from "axios";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import FollowingList from "../components/FollowingList";
import { useState } from "react";
import {AuthContext} from "../../shared/context/auth-context";
import { useContext } from "react";
import { useEffect } from "react";

const Following = () => {
  const auth = useContext(AuthContext);
  const [Following, setFollowing] = useState([]);
  useEffect(() => {
    const fetch = async (params) => {
      async function getAndSetFollowingData(params) {
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
      }
      await getAndSetFollowingData();
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
            <h1> Following</h1>
            <FollowingList Following={Following}/>
          </div>
        </div>
        <div
          style={{ padding: "20px", width: "400px" }}
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

export default Following;
