import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import '../stylesheets/Post.css'

const NewPost = ({blogApi}) => {

    let history = useHistory();
    const [body,setBody] = useState('');
    const [title,setTitle] = useState('');
    const [error,setError] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    }

    const createPost = (e) => {
        if (title.length > 0) {
            blogApi.sendPost(title, body)
            e.preventDefault();
            history.push(`/`);
        }
        else {
            setError("Title must be present.")
            e.preventDefault();
        }
        
    }

    return (
        <div>
            { error &&
                <h3 className="error"> { error } </h3> 
            }

            <nav>
                <Link className="nav-link" to='/'>Home</Link>            <br></br>
            </nav>

            <h1>New Post</h1>
            <form onSubmit={createPost}>
                <label className="form-label">
                    <input className="title-input" 
                           type="text"
                           data-testid="titleInput"
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