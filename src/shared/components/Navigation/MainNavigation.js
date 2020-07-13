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
          <nav>
            <NavLinks />
          </nav>
        </SideDrawer>
      

      <MainHeader>
        <button onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1>
          <Link to="/">Go Back To Top Page</Link>
        </h1>
        <nav >
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
