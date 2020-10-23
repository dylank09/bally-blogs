import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/Post.css'

const Post = ({id,title,body,date}) => {

    return (
    
        <div>
            <h3><Link className="post-title" 
                to={{ 
                pathname: `/posts/${id}`, 
                }}>{title}
            </Link></h3>
            <p className="post-body"> {body} </p>
            <p className="post-date"> Created on: {date} </p>
            <br></br>
        </div>
    )
    
}



export default Post;
