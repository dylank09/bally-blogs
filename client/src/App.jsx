import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import PostPage from "./posts/PostPage";
import NewPost from "./posts/NewPost";
import BlogsApi from "./services/BlogsApi";
import "./stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }
  componentDidMount() {
    this.loginStatus();
  }
  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {this.state.user && this.state.isLoggedIn ? (
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.isLoggedIn}
                    user={this.state.user.username}
                  />
                )}
              />
            ) : (
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    {...props}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
            )}

            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />

            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />

            {this.state.user ? (
              <Route
                path="/posts/:id"
                render={(props) => (
                  <PostPage
                    {...props}
                    blogApi={BlogsApi}
                    loggedInStatus={this.state.isLoggedIn}
                    userId={this.state.user.id}
                  />
                )}
              />
            ) : (
              <Route
                path="/posts/:id"
                render={(props) => (
                  <PostPage
                    {...props}
                    blogApi={BlogsApi}
                    loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
            )}

            <Route
              exact
              path="/new"
              render={(props) => (
                <NewPost
                  {...props}
                  blogApi={BlogsApi}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
