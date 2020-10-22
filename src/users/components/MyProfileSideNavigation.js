import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {AuthContext} from "../../shared/context/auth-context";

const MyProfileSideNavigation = () => {
  const [NavigationLinkLists, setNavigationLinkLists] = useState([]);
  const auth = useContext(AuthContext);
  useEffect(() => {
    (function (params) {
      let navigationLists = [
        { title: "My Profile", link: `/myProfile/${auth.userId}` },
        { title: "My Articles", link: `/${auth.userId}/articles` },
        { title: "Setting", link: `/myProfile/${auth.userId}` },
        { title: "Address", link: `/myProfile/${auth.userId}` },
        {
          title: "Followers",
          link: `/myProfile/${auth.userId}`,
        },
        { title: "Following", link: `/myProfile/${auth.userId}` },
        { title: "Stared Articles", link: `/myProfile/${auth.userId}` },
        {
          title: "Library",
          link: `/myProfile/${auth.userId}`,
        },
        { title: "Analytics", link: `/myProfile/${auth.userId}` },
        { title: "Billing", link: `/myProfile/${auth.userId}` },
        { title: "My Videos", link: `/videos/video_management/${auth.userId}` },
        { title: "My Comments", link: `/myProfile/${auth.userId}` },
        { title: "Stared Videos", link: `/myProfile/${auth.userId}` },
      ];
      setNavigationLinkLists(navigationLists);
    })();
  }, []);

  return (
    <div
      style={{
        width: "350px",
        height: "100%",
        border: "solid 1px black",
        backgroundColor: "#3A3A39",
      }}
    >
      <div style={{ padding: "10px" }}>
        {" "}
        <ul
          style={{
            padding: "0",
            listStyle: "none",

            fontSize: "17px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {NavigationLinkLists.map((v, i) => (
            <li key={i}>
              <div >
                <NavLink to={v.link}>
                  <div style={{padding:'15px'}}>
                    <span style={{ color: "white" }}>{v.title}</span>
                  </div>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfileSideNavigation;
