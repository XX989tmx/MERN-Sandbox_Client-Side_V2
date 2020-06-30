import React, {useContext} from 'react';

import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

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
        {auth.isLoggedIn && <li>
          <NavLink to="/articles/new">Add Article</NavLink>
        </li>}
        {!auth.isLoggedIn && <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>}
        {/* <li>
          <NavLinks>ADD ARTICLES</NavLinks>
        </li> */}
        {auth.isLoggedIn && (
          <li>
            <button onClick={auth.logout}>LOGOUT</button>
          </li>
        )}
      </ul>
    );
};

export default NavLinks;