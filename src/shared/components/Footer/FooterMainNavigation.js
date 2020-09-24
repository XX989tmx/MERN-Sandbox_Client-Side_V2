import React from "react";
import MainFooter from "./MainFooter";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./FooterMainNavigation.css";

const FooterMainNavigation = () => {
  const socialLinks = [
    { title: "Youtube", link: "https://en.wikipedia.org/wiki/Blockchain" },
    {
      title: "Twitter",
      link: "https://en.wikipedia.org/wiki/Blockchain",
    },
    { title: "Facebook", link: "https://en.wikipedia.org/wiki/Blockchain" },
    { title: "Linkedin", link: "https://en.wikipedia.org/wiki/Blockchain" },
    { title: "Instagram", link: "https://en.wikipedia.org/wiki/Blockchain" },
  ];

  const navigationLinks = [
    { title: "Articles", link: "/articles" },
    { title: "Crypto Converter", link: "/crypto_converter" },
    {
      title: "Videos",
      link: "/videos/main",
    },
    {
      title: "Crypto Index",
      link: "/cryptos/index",
    },
  ];

  const informationLinks = [
    { title: "About Us", link: "/about_us" },
    { title: "Contact Us", link: "/contact_us" },
    { title: "Disclaimer", link: "/about_us" },
    { title: "Terms", link: "/about_us" },
    { title: "Privacy", link: "/about_us" },
  ];

  return (
    <div className="footer-container">
      <MainFooter>
        <div className="footer-links-wrapper">
          <div className="footer-link-lists">
            <ul className="footer-link-list">
              <h3>Navigation</h3>
              {navigationLinks.map(function (link, index) {
                return (
                  <li className="footer-link-item" key={index}>
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-link-lists">
            <ul className="footer-link-list">
              <h3>Resources</h3>
              <li className="footer-link-item"></li>
              <li className="footer-link-item"></li>
            </ul>
          </div>
          <div className="footer-link-lists">
            <ul className="footer-link-list">
              <h3>Social</h3>
              {socialLinks.map(function (s, index) {
                return (
                  <li className="footer-link-item" key={index}>
                    <a href={s.link} target="_blank">
                      {s.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-link-lists">
            <ul className="footer-link-list">
              <h3>Information</h3>
              {informationLinks.map(function (link, index) {
                return (
                  <li key={index} className="footer-link-item">
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </MainFooter>
    </div>
  );
};

export default FooterMainNavigation;
