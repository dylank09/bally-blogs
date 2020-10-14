import React, {useState} from 'react';
import BlogsApi from '../services/BlogsApi';
import {useHistory, Link} from 'react-router-dom';
import '../stylesheets/Post.css'

const NewPost = () => {

    let history = useHistory();
    const [body,setBody] = useState('');
    const [title,setTitle] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    }

    const createPost = (e) => {
        if (title.length > 1) {
            BlogsApi.sendPost(title, body)
            e.preventDefault();
            history.push(`/posts`);
        }
        
    }

    return (
        <div>
            <nav>
                <Link className="nav-link" to='/posts'>Posts</Link>      <br></br>
                <Link className="nav-link" to='/'>Home</Link>            <br></br>
            </nav>

            <form onSubmit={createPost}>
                <label className="form-label">
                    <input className="title-input" 
                           type="text"
                           placeholder="title"
                           onChange={titleChangeHandler}
                    />
                </label>
                <br></br>
                <label className="form-label">
                    <textarea className="body-input"  
                           type="text"
                           placeholder="body"
                           onChange={bodyChangeHandler}
                    />
                </label>
                <br></br>
                <input 
                    type="submit" 
                    value="Submit" 
                    className="submit-input"
                />
            </form>
        </div>
             
    );
};

export default NewPost;