import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import BlogsApi from '../services/BlogsApi';
import { useParams, Link } from 'react-router-dom';

const PostPage = () => {

    const { id } = useParams();
    const [post,setPost] = useState([]);

    useEffect(() => {
        
        const getPost = async () => {
          const postData = await BlogsApi.fetchPost(id);
          setPost(postData)
        }
    
        getPost();
    
      },[id]);

    return (
        <div>
            <nav>
                <Link className="nav-link" to='/posts'>Posts</Link>      <br></br>
                <Link className="nav-link" to='/'>Home</Link>            <br></br>
            </nav>

            <Post 
                id={post.id}
                title={post.title}
                body={post.body}
                date={post.created_at}
            />

        </div>
             
    );
};

export default PostPage;