import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const PostsList = ({ blogApi }) => {
  const [state, setState] = useState({ loading: true });

  const truncate = (text) => {
    if (text.length > 290) {
      let i = 260;
      for (; i < text.length; i += 1) {
        if (text[i] === " ") break;
      }
      text = text.substring(0, i);
      text += "...";
      return text;
    } else return text;
  };

  useEffect(() => {
    const getPosts = async () => {
      const posts = await blogApi.fetchPosts();
      setState({
        loading: false,
        posts,
      });
    };

    getPosts();
  }, [blogApi]);

  if (state.loading) {
    return (
      <div>
        <h2 className="loading">LOADING...</h2>
      </div>
    );
  } else {
    return (
      <div>
        {state.posts.length > 0 ? (
          <span>
            <h2>Blogs</h2>
            <ul className="posts-list">
              {state.posts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={truncate(post.body)}
                  date={post.created_at.substring(0, 10)}
                  username={post.username}
                />
              ))}
            </ul>
          </span>
        ) : null}
      </div>
    );
  }
};

export default PostsList;
