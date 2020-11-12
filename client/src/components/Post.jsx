import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Post.css";
import Moment from "moment";

const Post = ({ id, title, body, date, username }) => {
  return (
    <span className="post">
      <h3>
        <Link
          className="post-title"
          to={{
            pathname: `/posts/${id}`,
          }}
        >
          {title}
        </Link>
      </h3>
      <p className="post-body"> {body} </p>
      <p className="post-date">
        {" "}
        Created by
        <span className="post-data"> {username} </span> on
        <span className="post-data">
          {" "}
          {Moment(date, "YYYY-MM-DD").format("DD-MM-YYYY")}{" "}
        </span>
      </p>
      <br></br> <br></br>
      <br></br>
    </span>
  );
};

export default Post;
