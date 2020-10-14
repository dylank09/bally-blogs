import React, {useEffect, useState} from 'react';
import Post from '../components/Post';
import BlogsApi from '../services/BlogsApi';
import {Link} from 'react-router-dom';

const PostsList = ({postsArray}) => {

    const [posts, setPosts] = useState();
    
    const truncate = (text) => {
        if(text.length > 300) {
            text = text.substring(0, 300);
            text += "...";
            return text;
        }
        else return text;
    }

    useEffect(() => {

        const getPosts = async () => {
          const postsData = await BlogsApi.fetchPosts();
          setPosts(postsData);
        }
    
        getPosts();
    
      },[]);

    return (
        <div>
            <nav>
                <Link className="nav-link" to='/'>Home</Link> <br></br>
            </nav>

            <ul className="posts-list"> 
                    {posts ? posts.map(post =>  (
                        
                        <Post key={post.id}
                            id={post.id}
                            title={post.title}
                            body={truncate(post.body)}
                            date={post.created_at.substring(0,10)}/>
                    
                    )) : null}
            </ul>
        </div>
    );
};

export default PostsList;