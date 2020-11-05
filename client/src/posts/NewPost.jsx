import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import '../stylesheets/Post.css'

const NewPost = ({blogApi, loggedInStatus}) => {

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

    const createPost =  async (e) => {
        e.preventDefault();

        if (title.length > 0) {
            if(loggedInStatus) {
                blogApi.sendPost(title, body)   
                .then(()=> history.push('/'))
            }
        }
        else {
            setError("Title must be present.")
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
                           name="title"
                           data-testid="titleInput"
                           placeholder="title"
                           onChange={titleChangeHandler}
                    />
                </label>
                <br></br>
                <label className="form-label">
                    <textarea className="body-input"  
                           type="text"
                           name="body"
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