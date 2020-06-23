import React from "react";
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
// import Article1 from "./articles/pages/Article1";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/articles" exact>
            <Articles />
          </Route>

          <Route path="/users" exact>
            <Users />
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

          <Route path="/auth">
            <Auth />
          </Route>


          {/* <Route path="/articles/:aid" exact>
            <UpdateArticle />
          </Route>
          <Route path="/articles/new" exact>
            <NewArticle />
          </Route>
          <Route path="/:uid/articles" exact>
            <UserArticles />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="categories/:cateid/:aid" exact>
            <CategoryArticle? />
          </Route> */}

          <Route path="/about_us" exact>
            <AboutUs />
          </Route>

          <Route path="/contact_us" exact>
            <ContactUs />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
