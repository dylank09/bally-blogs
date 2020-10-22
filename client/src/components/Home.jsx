import React from 'react';
import PostsList from '../posts/PostsList';
import BlogsApi from '../services/BlogsApi';
import Navbar from './Navbar'
import '../stylesheets/App.css'

const Home = (props) => {


  return (
   
    <div>
      <Navbar history={props.history} handleLogout={props.handleLogout} loggedInStatus={props.loggedInStatus}/>

      <h1 className="header"> Bally Blogs </h1>

      <PostsList blogApi={BlogsApi}/>

    </div>
  );
};
export default Home;