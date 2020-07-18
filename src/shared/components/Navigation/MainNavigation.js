import React, {useState} from "react";
import {Link} from 'react-router-dom';

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import './MainNavigation.css';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };



  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__header-nav">
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
        <h1 >
          <Link to="/" className="home-link">Go Back To Top Page</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>

        <div id="search-input" class="ytd-searchbox-spt" slot="search-input">
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
        </div>
        <span class="baseline_search_black_18dp">search</span>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
