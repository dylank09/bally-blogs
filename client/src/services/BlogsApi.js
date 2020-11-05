import axios from 'axios';
const POSTS_URL = `http://localhost:3001/posts/`;

const BlogsApi = {

    // Mock the Axios module. This ensure we don't call a real rest api while running tests.

    fetchPosts: async () => {
        const response = await axios(POSTS_URL);
        return response.data.data;
    },

    fetchPost: async (id) => {
        const response = await axios( POSTS_URL + id);
        return response.data.data;
    },

    sendPost: async (titleText, bodyText) => {
        let post = {
            title: titleText,
            body: bodyText
        }
        
        return axios.post('http://localhost:3001/posts', {post}, {withCredentials: true})
        
    },
      

}

export default BlogsApi;