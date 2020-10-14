import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = (props) => {
  

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  

  return (
   
    <div>
      <nav className='navbar'>
        {props.loggedInStatus ?
          <span>
            <Link className="nav-link" to='/logout' onClick={handleClick}>Log Out</Link> 
            <br></br>
            <Link className="nav-link" to='/new'>New Post</Link> 
          </span>  
          : 
          <span>
            <Link className="nav-link" to='/login'>Log In</Link>
            <br></br> 
            <Link className="nav-link" to='/signup'>Sign Up</Link>
          </span> 
        }
        <br></br>
        <Link className="nav-link" to='/posts'>Posts</Link>
        <br></br>
      </nav>
    </div>
  );
};
export default Home;