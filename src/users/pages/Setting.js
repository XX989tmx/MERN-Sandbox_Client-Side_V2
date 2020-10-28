import React from "react";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const Setting = () => {
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
            <h1>Setting</h1>
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

export default Setting;
