import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { useParams, Link } from 'react-router-dom';

const PostPage = ({blogApi}) => {

    const { id } = useParams();
    const [state,setState] = useState({loading: true});

    useEffect(() => {
        
        const getPost = async () => {
          const postData = await blogApi.fetchPost(id);
          setState({
              loading: false,
              postData
          })
          
        }
    
        getPost();
    
    },[id, blogApi]);

    if (state.loading) {
        return (
            <div><h2 className="loading">LOADING...</h2></div>
            // <Spinner type="circle-spinner" />
        )
    }

    else {
        return (
            <div>
                <nav>
                    <Link className="nav-link" to='/'>Home</Link>            <br></br>
                </nav>
                <Post 
                    id={state.postData.id}
                    title={state.postData.title}
                    body={state.postData.body}
                    date={state.postData.created_at?.substring(0, 10)}
                    username={state.postData.username}
                />

            </div>
                
        );
    }
};

export default PostPage;