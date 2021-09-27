import { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProfileContext from "../context/ProfileContext";
import About from "./About/About";
import CreatePost from "./CreatePost/CreatePost";
import Login from "./Registration/Login";
import SignIn from "./Registration/SignIn";
import ViewPost from "./ViewPost/ViewPost";
import "../css/styleBody.css";
import EditProfile from "./EditProfile/EditProfile";
import LandingPage from "./LandingPage/LandingPage";
import SeeMyProfile from "./SeeMyProfile/SeeMyProfile";
import Home from "./Home/Home";
import Categories from "./Categories/Categories";
import CategoryPosts from "./CategoryPosts/CategoryPosts";

const Routes = () => {
  const { activeProfile } = useContext(ProfileContext);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            {activeProfile !== false ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/signIn">
            {activeProfile !== false ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            {activeProfile !== false ? <Home /> : <Redirect to="/signIn" />}
          </Route>
          <Route exact path="/categories">
            {activeProfile !== false ? (
              <Categories />
            ) : (
              <Redirect to="/signIn" />
            )}
          </Route>
          <Route exact path="/categories/:categoryName">
            {activeProfile !== false ? (
              <CategoryPosts />
            ) : (
              <Redirect to="/signIn" />
            )}
          </Route>
          <Route exact path="/about">
            {activeProfile !== false ? <About /> : <Redirect to="/signIn" />}
          </Route>
          <Route exact path="/view/:publishID">
            {activeProfile === false ? <Redirect to="/signIn" /> : <ViewPost />}
          </Route>
          <Route exact path="/createPost">
            {activeProfile === false ? (
              <Redirect to="/signIn" />
            ) : (
              <CreatePost />
            )}
          </Route>
          <Route exact path="/editProfile">
            {activeProfile === false ? (
              <Redirect to="/signIn" />
            ) : (
              <EditProfile />
            )}
          </Route>
          <Route exact path="/profileInf">
            {activeProfile !== false ? (
              <SeeMyProfile />
            ) : (
              <Redirect to="/signIn" />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
