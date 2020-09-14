import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ExploreIcon from "@material-ui/icons/Explore";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const auth = useContext(AuthContext);
  const [OpenArticlesNavArea, setOpenArticlesNavArea] = useState(false);
  const [OpenDownloadsNavArea, setOpenDownloadsNavArea] = useState(false);
  const [OpenCryptoConverterNavArea, setOpenCryptoConverterNavArea] = useState(
    false
  );
  const [OpenNavModalArea, setOpenNavModalArea] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const openNavModalArea = (params) => {
    setOpenNavModalArea(true);
  };

  const closeNavModalArea = (params) => {
    setOpenNavModalArea(false);
  };

  //   // articleを検索する
  // const searchQueryArticle = (params) => {
  //   const response = fetch("http://localhost:5000/api/articles/search?search_query={user_input_value}", 'POST');
  //   // backendでreq.queryでクエリを受け取りparseし変数に代入し、それをキーにして、データベース検索かけ、結果をJSON形式でresとして返す.
  //   // 当然、対応するRouteも作る事
  //   const result = response.sort();
  //   setSerchResult(result);
  //   // divにresult stateをおき、検索結果とする
  // };

  // // Crypto Converterページの情報を検索
  // const searchQueryCrypto = (params) => {
  //   const response = fetch(
  //     "http://localhost:5000/api/get_external_api/crypto_currency/search?search_query={user_input_value}",
  //     "POST"
  //   );
  //   // backendでreq.queryでクエリを受け取りparseし変数に代入し、それをキーにして、データベース検索かけ、結果をJSON形式でresとして返す
  //   // 当然、対応するRouteも作る事
  //   const result = response.sort();
  //   setSerchResult(result);
  //   // divにresult stateをおき、検索結果とする
  // };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-button"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <ExploreIcon style={{ color: "white", fontSize: "40px" }} />
        <h1 style={{ position: "absolute", left: "80px" }}>
          <Link to="/" className="home-link" style={{ textDecoration: "none" }}>
            <span style={{ position: "relative", left: "0" }}>MSandbox</span>
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <ul className="nav-list">
            <li className="nav-items" onMouseOver={openNavModalArea}>
              Articles
            </li>
            <li className="nav-items" onMouseOver={openNavModalArea}>
              Downloads
            </li>
            <li className="nav-items" onMouseOver={openNavModalArea}>
              Crypto Converter
            </li>
            <li className="nav-items" onMouseOver={openNavModalArea}>
              Videos
            </li>
            <li className="nav-items" onMouseOver={openNavModalArea}>
              Settings & Information
            </li>
          </ul>
          {/* <NavLinks /> */}
        </nav>
        {OpenNavModalArea && (
          <div
            className="nav-modal-area"
            onClick={closeNavModalArea}
            onMouseLeave={closeNavModalArea}
          >
            <div className="article-nav-modal">
              <ul className="article-nav-modal-list">
                {auth.isLoggedIn && (
                  <li>
                    <NavLink to="/articles/new">Add Article</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/articles">ALL ARTICLES</NavLink>
                </li>
                <li>
                  <NavLink to="/users">ALL USERS</NavLink>
                </li>
                <li>
                  <NavLink to={`/${auth.userId}/articles`}>MY ARTICLES</NavLink>
                </li>
                <li>
                  <NavLink to="/articles/tagIndex">Tag Index</NavLink>
                </li>
                <li>
                  <NavLink to="/articles/categoryIndex">Category Index</NavLink>
                </li>
              </ul>
            </div>

            <div className="downloads-nav-modal">
              <ul className="downloads-nav-modal-list">
                <li>
                  <NavLink to="/download">Download</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/flex_training">Flex Training</NavLink>
                </li> */}
              </ul>
            </div>

            <div className="crypto-converter-nav-modal">
              <ul className="crypto-converter-nav-modal-list">
                <li>
                  <NavLink to="/crypto_converter">Crypto Converter</NavLink>
                </li>
                <li>
                  <NavLink to="/crypto_converter/historical_data">
                    Historical Data
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/crypto_converter/fcasRating">
                    FcasRating
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="videos-nav-modal">
              <ul className="videos-nav-modal-list">
                <li>
                  <NavLink to={`/videos/new`}>New Video</NavLink>
                </li>
                <li>
                  <NavLink to="/videos/main">Video Main</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/videos/item">Video Item</NavLink>
                </li> */}
                <li>
                  <NavLink to={`/videos/video_management/${auth.userId}`}>
                    manage my video
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="settings-and-information-modal">
              <ul className="settings-and-information-nav-modal-list">
                {/* <li>
                  <NavLink to={`/${auth.userId}/user_detail_info/create`}>
                    User Detail Information
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/${auth.userId}/user_detail_info/show`}>
                    Show User Detail Info
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/${auth.userId}/user_detail_info/update`}>
                    Update User Detail Info
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/about_us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact_us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}

        {!auth.isLoggedIn && (
          <li className="authentication-button">
            <NavLink to="/auth">Authenticate</NavLink>
          </li>
        )}
        {/* <li>
          <NavLinks>ADD ARTICLES</NavLinks>
        </li> */}
        {auth.isLoggedIn && (
          <li className="logout">
            <button className="logout-button" onClick={auth.logout}>
              LOGOUT
            </button>
          </li>
        )}

        {/* <div id="search-input" class="ytd-searchbox-spt" slot="search-input">
          <input
            id="search"
            autocapitalize="none"
            autocomplete="off"
            autocorrect="off"
            name="search_query"
            tabindex="0"
            type="text"
            spellcheck="false"
            placeholder="Search"
            aria-label="Search"
            aria-haspopup="false"
            role="combobox"
            aria-autocomplete="list"
            dir="ltr"
            class="ytd-searchbox"
          />
          <submit>search</submit>
        </div>
        <span class="baseline_search_black_18dp">search</span> */}
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
