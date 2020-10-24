import React from "react";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import StaredArticlesList from "../components/StaredArticlesList";

const StaredArticles = () => {
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
            <StaredArticlesList />
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
