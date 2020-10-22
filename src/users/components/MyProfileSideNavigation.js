import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const MyProfileSideNavigation = () => {
  const [NavigationLinkLists, setNavigationLinkLists] = useState([]);
  useEffect(() => {
    (function (params) {
      let navigationLists = [
        { title: "My Profile", link: `/myProfile/:userId` },
        { title: "My Articles", link: `/:userId/articles` },
        { title: "Setting", link: `/myProfile/:userId` },
        { title: "Address", link: `/myProfile/:userId` },
        {
          title: "Followers",
          link: `/myProfile/:userId`,
        },
        { title: "Following", link: `/myProfile/:userId` },
        { title: "Stared Articles", link: `/myProfile/:userId` },
        {
          title: "Library",
          link: `/myProfile/:userId`,
        },
        { title: "Analytics", link: `/myProfile/:userId` },
        { title: "Billing", link: `/myProfile/:userId` },
        { title: "My Videos", link: `/videos/video_management/:userId` },
        { title: "My Comments", link: `/myProfile/:userId` },
        { title: "Stared Videos", link: `/myProfile/:userId` },
      ];
      setNavigationLinkLists(navigationLists);
    })();
  }, []);

  return (
    <div style={{ width: "350px", height: "100%", border: "solid 1px black" }}>
      <ul>
        {NavigationLinkLists.map((v, i) => (
          <li key={i}>
            <NavLink to={v.link}>{v.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfileSideNavigation;
