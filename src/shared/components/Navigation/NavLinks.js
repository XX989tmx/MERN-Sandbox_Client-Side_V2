import React, {useContext} from 'react';

import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
      <ul className="navlinks">
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
        <li>
          <NavLink to="/about_us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact_us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/flex_training">Flex_Training</NavLink>
        </li>
        <li>
          <NavLink to="/download">Download</NavLink>
        </li>
        <li>
          <NavLink to="/crypto_converter">crypto_converter</NavLink>
        </li>
        <li>
          <NavLink to="/crypto_converter/historical_data">
            Historical Data
          </NavLink>
        </li>
        <li>
          <NavLink to="/crypto_converter/fcasRating">FcasRating</NavLink>
        </li>

        <li>
          <NavLink to="/videos/main">video Main</NavLink>
        </li>
        <li>
          <NavLink to="/videos/item">ideo item</NavLink>
        </li>

        <li>
          <NavLink to={`/${auth.userId}/user_detail_info/create`}>
            user_detail_info
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${auth.userId}/user_detail_info/show`}>
            show_user_detail_info
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${auth.userId}/user_detail_info/update`}>
            update_user_detail_info
          </NavLink>
        </li>

        <li>
          <NavLink to={`/videos/new`}>New Video</NavLink>
        </li>

        {auth.isLoggedIn && (
          <li>
            <NavLink to="/articles/new">Add Article</NavLink>
          </li>
        )}
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/auth">Authenticate</NavLink>
          </li>
        )}
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