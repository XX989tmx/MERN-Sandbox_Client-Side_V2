import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// import Articles from "./articles/pages/Articles";
// import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import AboutUs from "./statics/AboutUs";
// import ContactUs from "./statics/ContactUs";
// import UserArticles from "./articles/pages/UserArticles";
// import CategoryArticles from "./articles/pages/CategoryArticles";
// import NewArticle from "./articles/pages/NewArticle";
// import UpdateArticle from "./articles/pages/UpdateArticle";
// import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
// import Article1 from "./articles/pages/Article1";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import "./App.css";

const Articles = React.lazy(() => import("./articles/pages/Articles"));
const Users = React.lazy(() => import("./users/pages/Users"));
// const MainNavigation = React.lazy(() =>
//   import("./shared/components/Navigation/MainNavigation")
// );
const AboutUs = React.lazy(() => import("./statics/AboutUs"));
const ContactUs = React.lazy(() => import("./statics/ContactUs"));
const UserArticles = React.lazy(() => import("./articles/pages/UserArticles"));
const CategoryArticles = React.lazy(() =>
  import("./articles/pages/CategoryArticles")
);
const NewArticle = React.lazy(() => import("./articles/pages/NewArticle"));
const UpdateArticle = React.lazy(() =>
  import("./articles/pages/UpdateArticle")
);
const Auth = React.lazy(() => import("./users/pages/Auth"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

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
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
