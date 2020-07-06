import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Articles from "./articles/pages/Articles";
import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import AboutUs from "./statics/AboutUs";
import ContactUs from "./statics/ContactUs";
import UserArticles from "./articles/pages/UserArticles";
import CategoryArticles from "./articles/pages/CategoryArticles";
import NewArticle from "./articles/pages/NewArticle";
import UpdateArticle from "./articles/pages/UpdateArticle";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
// import Article1 from "./articles/pages/Article1";

import "./App.css";

let logoutTimer;

const App = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId, token, expirationDate) => {
    setToken(token);
    setUserId(userId);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationDate)
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/:userId/articles" exact>
          <UserArticles />
        </Route>
        <Route path="/:categoryId/articles" exact>
          <CategoryArticles />
        </Route>
        <Route path="/articles/new" exact>
          <NewArticle />
        </Route>
        <Route path="/articles/:articleId">
          <UpdateArticle />
        </Route>
        <Route path="/about_us" exact>
          <AboutUs />
        </Route>

        <Route path="/contact_us" exact>
          <ContactUs />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/:userId/articles" exact>
          <UserArticles />
        </Route>
        <Route path="/:categoryId/articles" exact>
          <CategoryArticles />
        </Route>
        <Route path="/about_us" exact>
          <AboutUs />
        </Route>

        <Route path="/contact_us" exact>
          <ContactUs />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
