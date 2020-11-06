import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import '../stylesheets/Post.css'

const NewPost = ({blogApi, loggedInStatus}) => {

    let history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [state, setState] = useState({
        loading: false,
        error: ''
    });  

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    }

    const createPost =  async (e) => {
        e.preventDefault();

        if (title.length > 0) {
            setState({loading: true})
            blogApi.sendPost(title, body)   
            .then(()=> history.push('/'))
        }
        else {
            setState({
                loading: false,
                error: "Title must be present."
            })
        }
        
    }

if (state.loading) {
    return <div><h2 className="loading">Please wait while we process your post...</h2></div>
}
else {

    return (
        <div>
            { state.error &&
                <h3 className="error"> { state.error } </h3> 
            }

            <nav>
                <Link className="nav-link" to='/'>Home</Link>            <br></br>
            </nav>

            <h1>New Blog</h1>
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
    }
}

export default NewPost;