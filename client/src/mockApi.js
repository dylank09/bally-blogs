
const mockApi = {

    fetchPosts: async () => {
        
        //return data.data;
    },

    fetchPost: async (id) => {
        const data = {
            body: "body txt",
            created_at: "2020-10-14T13:57:22.824Z",
            id: 1,
            title: "title txt",
            updated_at: "2020-10-14T13:57:22.824Z",
            user_id: 1
        }
        return data.data;
    },
      
}

export default mockApi;