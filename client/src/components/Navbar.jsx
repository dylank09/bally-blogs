import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Navbar = ({history, handleLogout, loggedInStatus}) => {
  

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      handleLogout()
      history.push('/')
    })
    .catch(error => console.log(error))
  }

  

  return (
   
    <nav className='navbar'>
        {loggedInStatus ?
          <span>
            <Link className="nav-link" to='/logout' onClick={handleClick}>Log Out</Link> 
            <br></br>
            <Link className="nav-link" to='/new'>New Blog</Link> 
          </span>  
          : 
          <span>
            <Link className="nav-link" to='/login'>Log In</Link>
            <br></br> 
            <Link className="nav-link" to='/signup'>Sign Up</Link>
          </span> 
        }
        <br></br>
    </nav>
  );
};
export default Navbar;