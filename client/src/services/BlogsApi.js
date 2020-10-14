import axios from 'axios';
const POSTS_URL = `http://localhost:3001/posts/`;

const BlogsApi = {

    fetchPosts: async () => {
        const response = await fetch(POSTS_URL);
        const data = await response.json();
        return data.data;
    },

    fetchPost: async (id) => {
        const response = await fetch( POSTS_URL + id);
        const data = await response.json();
        return data.data;
    },

    sendPost: async (titleText, bodyText) => {
        let post = {
            title: titleText,
            body: bodyText
        }
        axios.post('http://localhost:3001/posts', {post}, {withCredentials: true})
        .then(response => {
            if (response.data.status === "created") {
                console.log(response.data);
                return response.data;
            }
            else {
                return;
            }
        })
        .catch(error => console.log('api errors:', error))
        
    },
      

}

export default BlogsApi;