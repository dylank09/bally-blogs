import React from "react";
import PostsList from "../posts/PostsList";
import BlogsApi from "../services/BlogsApi";
import Navbar from "./Navbar";
import "../stylesheets/App.css";

const Home = (props) => {
  return (
    <span>
      <Navbar
        history={props.history}
        handleLogout={props.handleLogout}
        loggedInStatus={props.loggedInStatus}
      />

      {props.loggedInStatus && props.user ? (
        <p className="logged-in-as">
          {" "}
          Logged in as
          <span className="logged-in-as-data"> {props.user} </span>
        </p>
      ) : null}

      <h1 className="header"> Bally Blogs </h1>

      <PostsList blogApi={BlogsApi} />
    </span>
  );
};
export default Home;
