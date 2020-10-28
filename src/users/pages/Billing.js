import React from "react";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const Billing = () => {
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
            <h1>Billing</h1>
            <h4>registered payment method</h4>
            <h4>add payment method</h4>
            <h4>update payment method</h4>
            <h4>delete payment method</h4>
            <h4>check invoice</h4>
            <h4>invoice this month</h4>
            <h4>invoice this year</h4>
            <h4>invoice all</h4>
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

export default Billing;
