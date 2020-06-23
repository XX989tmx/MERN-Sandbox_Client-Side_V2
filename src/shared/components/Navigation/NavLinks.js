import React from 'react';

import { NavLink } from "react-router-dom";

const NavLinks = props => {
    return (
      <ul>
        <li>
          <NavLink to="/articles">ALL ARTICLES</NavLink>
        </li>
        <li>
          <NavLink to="/users">ALL USERS</NavLink>
        </li>
        <li>
          <NavLink to="/about_us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact_us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/articles/new">Add Article</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        {/* <li>
          <NavLinks>ADD ARTICLES</NavLinks>
        </li> */}
      </ul>
    );
};

export default NavLinks;