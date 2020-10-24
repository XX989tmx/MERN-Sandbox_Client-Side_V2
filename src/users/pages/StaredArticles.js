import React, { useEffect } from "react";
import { reactRouterDom } from "react-router-dom";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import StaredArticlesList from "../components/StaredArticlesList";
import { useState } from "react";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";

const StaredArticles = () => {
  const auth = useContext(AuthContext);
  const [StaredArticles, setStaredArticles] = useState([]);
  useEffect(() => {
    const fetch = async (params) => {
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            `/articles/getStaredArticles/${auth.userId}`
        );
        console.log(response.data);
        const data = response.data;
        const staredArticles = data.staredArticles;
        console.log(staredArticles);
        setStaredArticles(staredArticles);
      } catch (error) {
        console.log(error);
      }
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
            <h1> Stared Articles</h1>
            <StaredArticlesList StaredArticles={StaredArticles} />
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

export default StaredArticles;
