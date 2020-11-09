import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/Post.css'

const Post = ({id,title,body,date, username}) => {

    return (
    
        <span>
            <h3><Link className="post-title" 
                to={{ 
                pathname: `/posts/${id}`, 
                }}>{title}
            </Link></h3>
            <p className="post-body"> {body} </p>
            {username ? 
                <p className="post-user"> Created by: <span className="post-data"> {username} </span> </p>
            : null }
            <p className="post-date"> Created on: <span className="post-data"> {date} </span> </p>
            <br></br>
        </span>
    )
    
}



export default Post;
